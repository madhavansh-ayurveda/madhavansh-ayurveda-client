import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Calendar } from "../components/ui/calendar";
import { User, CalendarDays, Stethoscope, FileText, Loader2, AlertCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Doctor, Slot } from "../types/index";
import { consultationService } from "../services/consultationService";
import { toast } from "react-hot-toast";
import { Consultation } from "../types/index";
import { useNavigate } from "react-router-dom";
import { getErrorMessage } from "../utils/apiErrorHandler";
import { useAppSelector, useAppDispatch } from "@/hooks/useAppSelector";
import { doctorsService } from "@/services/doctorsService";
import {
  fetchDoctorsStart,
  fetchDoctorsSuccess,
  fetchDoctorsFailure,
} from "@/store/features/doctorsSlice";
import AuthVerification from "@/components/AuthVerification";
import { storeConsultationId } from "@/store/features/consultationSlice";

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

interface FormData {
  name: string;
  contact: string;
  email?: string;
  doctor: { doctorName: string; doctorId: string };
  consultationType: Consultation["consultationType"];
  date: Date;
  timeSlot: string;
  department: string;
  symptoms: string;
  previousConsultationId?: string;
  mode: "online" | "offline";
}

export default function BookConsultation() {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [symptoms, setSymptoms] = useState("");
  const [consultationType, setConsultationType] = useState("");
  const [department, setDepartment] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState({
    doctorName: "",
    doctorId: "",
  });
  const { doctors: doctorsData, lastFetched } = useAppSelector(
    (state) => state.doctors
  );
  const [timeSlot, setTimeSlot] = useState("");
  const [prevConsultId, setPrevConsultId] = useState("");
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [doctorError, setDoctorError] = useState<string | null>(null);
  const { user } = useAppSelector((state) => state.auth);
  const [mode, setMode] = useState<"online" | "offline">("offline");
  const [timeSlots, setTimeSlots] = useState<Slot[] | undefined>(undefined);
  const consultationTypesList = [
    "General Consultation",
    "Follow-up",
    "Specific Treatment",
  ];
  const departmentSpeciality = [
    "Skin & Hair",
    "Infertility and PCOD",
    "Kidney and Gallbladder Stone",
    "Arthritis and Pain Management",
    "Life style disorder",
    "Glaucoma",
    "Immunity booster dose",
  ];
  const [calendarDays, setCalendarDays] = useState<number[]>([]);
  const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday"]

  const [doctor, setDoctor] = useState<Doctor | undefined>(undefined);

  useEffect(() => {
    const fetchDoctors = async () => {
      if (
        doctorsData.length > 0 &&
        lastFetched &&
        Date.now() - lastFetched < CACHE_DURATION
      ) {
        return; // Use cached data
      }
      dispatch(fetchDoctorsStart());
      try {
        const data = await doctorsService.getAllActiveDoctors();
        dispatch(fetchDoctorsSuccess(data));
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to fetch doctors";
        dispatch(fetchDoctorsFailure(errorMessage));
        toast.error(errorMessage);
      }
    };

    fetchDoctors();
  }, [dispatch]);

  useEffect(() => {
    const currentDoctor = doctorsData.find(
      (doctor) => doctor._id === selectedDoctor.doctorId
    );
    setDoctor(currentDoctor);
    setDoctorError(null);

    if (currentDoctor) {
      const calendarDaysIndex = currentDoctor.availability.days.map((day) =>
        dayList.indexOf(day)
      );
      setCalendarDays(calendarDaysIndex);
    } else if (selectedDoctor.doctorId) {
      setDoctorError("Selected doctor not found");
    }
  }, [selectedDoctor, doctorsData]);

  useEffect(() => {
    if (doctor && date) {
      const dayIndex = date.getDay();
      const currentDay = dayList[dayIndex];
      const DaySlots = doctor.availability.slots[doctor.availability.days?.indexOf(currentDay)];

      if (DaySlots) {
        const availableDaySlots = DaySlots.filter((slot) => !slot.isBooked);
        setTimeSlots(availableDaySlots);
      } else {
        setTimeSlots([]);
      }
    }
  }, [doctor, date]);

  const handleAuthError = (error: Error) => {
    toast.error("Authentication failed: " + error.message);
    navigate("/login");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!date) throw new Error("Please select a date");
      if (!timeSlot) throw new Error("Please select a time slot");
      if (!consultationType) throw new Error("Please select a consultation type");
      if (!selectedDoctor.doctorId) throw new Error("Please select a doctor");
      if (!department) throw new Error("Please select a department");
      if (consultationType === "Follow-up" && !prevConsultId) {
        throw new Error("Please enter previous consultation ID for follow-up");
      }

      let formdata: FormData = {
        name: user?.name || "",
        contact: user?.contact || "",
        doctor: selectedDoctor,
        consultationType: consultationType as Consultation["consultationType"],
        department: department,
        date: date,
        timeSlot,
        symptoms,
        mode,
      };

      if (user?.email) formdata.email = user.email;
      if (prevConsultId) formdata.previousConsultationId = prevConsultId;

      const consultation = await consultationService.createConsultation(formdata);
      dispatch(storeConsultationId(consultation._id));

      const note = consultation.contact + "_" + consultation._id;
      navigate(`/payment/${note}`, {
        state: {
          paymentDetails: {
            amount: consultation.amount,
            consultationId: consultation._id,
            doctorName: selectedDoctor.doctorName,
            date: date,
            timeSlot: timeSlot,
          },
        },
      });
    } catch (error) {
      toast.error(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50/50"
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-50">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src="/ayurveda2.jpg" alt="Ayurveda background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-primary-900"
          >
            Book Your Consultation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-primary-800 max-w-3xl mx-auto"
          >
            Your path to holistic wellness starts here. Fill out the form below to schedule your appointment.
          </motion.p>
        </div>
      </section>

      {/* Main Form Section */}
      <div className="container mx-auto py-16 px-4">
        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <User className="w-5 h-5 text-primary-500" />
                  <h2 className="text-xl font-semibold">Patient Information</h2>
                </div>
                <AuthVerification onError={handleAuthError} />
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-5 h-5 text-primary-500" />
                  <h2 className="text-xl font-semibold">Consultation Details</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Select onValueChange={setConsultationType} value={consultationType}>
                    <SelectTrigger><SelectValue placeholder="Consultation type" /></SelectTrigger>
                    <SelectContent>
                      {consultationTypesList.map((type) => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <Select onValueChange={setDepartment} value={department}>
                    <SelectTrigger><SelectValue placeholder="Department" /></SelectTrigger>
                    <SelectContent>
                      {departmentSpeciality.map((type) => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <Select onValueChange={(v) => setSelectedDoctor(JSON.parse(v))} value={selectedDoctor.doctorId ? JSON.stringify(selectedDoctor) : undefined}>
                    <SelectTrigger><SelectValue placeholder="Choose a doctor" /></SelectTrigger>
                    <SelectContent>
                      {doctorsData?.filter(d => d.department?.includes(department)).length > 0 ? (
                        doctorsData?.filter(d => d.department?.includes(department)).map(doc => (
                          <SelectItem key={doc._id} value={JSON.stringify({ doctorName: doc.name, doctorId: doc._id })}>
                            {doc.name} - {doc.specialization.join(", ")}
                          </SelectItem>
                        ))
                      ) : <SelectItem value="no-doctors" disabled>No doctors found</SelectItem>}
                    </SelectContent>
                  </Select>
                  {consultationType === "Follow-up" && <Input value={prevConsultId} onChange={(e) => setPrevConsultId(e.target.value)} placeholder="Previous Consultation ID" />}
                </div>
                {doctorError && <p className="mt-2 text-sm text-red-500">{doctorError}</p>}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <CalendarDays className="w-5 h-5 text-primary-500" />
                  <h2 className="text-xl font-semibold">Schedule Appointment</h2>
                </div>
                <div className="border rounded-lg">
                  <Calendar mode="single" selected={date} onSelect={setDate} className="p-0" disabled={(d) => d < new Date() || !calendarDays.includes(d.getDay())} />
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Available Time Slots</label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots && timeSlots.length > 0 ? timeSlots.map(slot => (
                      <Button key={slot.startTime} type="button" variant={timeSlot === slot.startTime ? "default" : "outline"} onClick={() => setTimeSlot(slot.startTime)}>
                        {slot.startTime}
                      </Button>
                    )) : <p className="col-span-3 text-sm text-gray-500">Please select a date to see available slots.</p>}
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Consultation Mode</label>
                  <div className="flex gap-4">
                    <Button type="button" onClick={() => setMode("offline")} variant={mode === "offline" ? "default" : "outline"} className="flex-1">In-Person</Button>
                    <Button type="button" onClick={() => setMode("online")} variant={mode === "online" ? "default" : "outline"} className="flex-1">Online</Button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Stethoscope className="w-5 h-5 text-primary-500" />
                  <h2 className="text-xl font-semibold">Symptoms (Optional)</h2>
                </div>
                <Textarea value={symptoms} onChange={(e) => setSymptoms(e.target.value)} placeholder="Describe your symptoms..." className="h-24" />
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-lg p-4 border border-blue-100 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-blue-900">Important Notes</h3>
              <ul className="list-disc list-inside mt-1 text-sm text-blue-700 space-y-1">
                <li>We will confirm your appointment via email and phone.</li>
                <li>For in-person consultations, please arrive 15 minutes early.</li>
                <li>Online consultation links will be sent prior to your scheduled time.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button type="submit" className="w-full max-w-md py-6 text-lg" disabled={loading || !date || !timeSlot || !consultationType || !selectedDoctor.doctorId}>
              {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
              {loading ? "Booking..." : "Confirm Booking"}
            </Button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}