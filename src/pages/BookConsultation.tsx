// client/src/pages/BookConsultation.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Calendar } from "../components/ui/calendar";
import { User, CalendarDays, Stethoscope, FileText } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { consultationService } from "../services/consultationService";
import { toast } from "react-hot-toast";
import { Consultation } from "../types/index";
import { useNavigate } from "react-router-dom";
import { getErrorMessage } from "../utils/apiErrorHandler";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { doctorsService } from "@/services/doctorsService";
import {
  fetchDoctorsStart,
  fetchDoctorsSuccess,
  fetchDoctorsFailure,
} from "@/store/features/doctorsSlice";
import AuthVerification from "@/components/AuthVerification";
import { storeConsultationId } from "@/store/features/authSlice";
import { api } from "@/api/axios";
import { log } from "node:console";

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

interface FormData {
  name: string;
  contact: string;
  doctor: { doctorName: string; doctorId: string };
  consultationType: Consultation["consultationType"];
  date: Date;
  timeSlot: string;
  symptoms: string;
  previousConsultationId?: string; // Add this property to the type definition
}

export default function BookConsultation() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [symptoms, setSymptoms] = useState("");
  const [consultationType, setConsultationType] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState({
    doctorName: "",
    doctorId: "",
  });
  const { doctors: doctorsData, lastFetched } = useAppSelector(
    (state) => state.doctors
  );
  console.log(doctorsData);

  const [timeSlot, setTimeSlot] = useState("");
  const [prevConsultId, setPrevConsultId] = useState("");
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  // Retrieve user data from Redux
  const { user, consultationId } = useAppSelector((state) => state.auth);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!date) {
        toast.error("Please select a date");
        return;
      }

      // Prepare formdata including name, contact, and consultation from Redux
      let formdata: FormData = {
        name: user?.name || name,
        contact: user?.contact || contact,
        doctor: selectedDoctor,
        consultationType: consultationType as Consultation["consultationType"],
        date: date,
        timeSlot,
        symptoms,
      };

      if (prevConsultId.length > 0) {
        formdata = { ...formdata, previousConsultationId: prevConsultId };
      }

      console.log(formdata);

      const consultation = await consultationService.createConsultation(
        formdata
      );
      console.log(consultation);

      // Dispatch the action to store the consultation ID
      dispatch(storeConsultationId(consultation._id));

      console.log(user, consultationId);

      toast.success("Consultation booked successfully!");
      navigate(`/consultation/${consultation._id}`);
    } catch (error) {
      toast.error(getErrorMessage(error));
      console.error("Booking error:", error);
    } finally {
      setLoading(false);
    }
  };

  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "02:00 PM",
  ];

  const consultationTypesList = [
    "General Consultation",
    "Follow-up",
    "Specific Treatment",
    "Emergency",
  ];

  const [qrCode, setQrCode] = useState("");

  const generateQR = async () => {
    const response = await api("/generate-qr");
    // const data = await response.json();
    console.log(response);
    setQrCode(response.data.qrCodeData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <div className="bg-primary-500 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-white">
            Book Your Consultation
          </h1>
          <p className="text-center mt-2 text-primary-100 max-w-2xl mx-auto">
            Schedule your appointment with our experienced Ayurvedic
            practitioners
          </p>
        </div>
      </div>

      {/* Main Form Section */}
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-around">
          <div className="flex-1 max-w-4xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Patient Information Card */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <User className="w-5 h-5 text-primary-500" />
                  <h2 className="text-xl font-semibold">Patient Information</h2>
                </div>
                <AuthVerification />
              </div>

              {/* Consultation Details Card */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-5 h-5 text-primary-500" />
                  <h2 className="text-xl font-semibold">
                    Consultation Details
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Type
                    </label>
                    <Select
                      onValueChange={setConsultationType}
                      value={consultationType}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select consultation type" />
                      </SelectTrigger>
                      <SelectContent>
                        {consultationTypesList.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Doctor
                    </label>
                    <Select
                      onValueChange={(value) => {
                        // Parse the stringified object back to get doctorName and _id
                        const doctor = JSON.parse(value);
                        setSelectedDoctor(doctor);
                      }}
                      value={
                        selectedDoctor.doctorId
                          ? JSON.stringify(selectedDoctor)
                          : undefined
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        {doctorsData &&
                          doctorsData.map((doctor) => (
                            <SelectItem
                              key={doctor._id}
                              value={JSON.stringify({
                                doctorName: doctor.name,
                                doctorId: doctor._id,
                              })}
                            >
                              {doctor.name} - {doctor.specialization}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-1">
                    {consultationType === "Follow-up" && (
                      <>
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Previous Consultaion ID
                          </label>
                          <Input
                            value={prevConsultId}
                            onChange={(e) => setPrevConsultId(e.target.value)}
                            className="md:w-[60%] focus:ring-1 focus:ring-primary-500 focus:border-primary-500 focus:outline-none"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Schedule Card */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <CalendarDays className="w-5 h-5 text-primary-500" />
                  <h2 className="text-xl font-semibold">Schedule</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date
                    </label>
                    <div className="border rounded-lg p-3">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md"
                        disabled={(date) => {
                          const today = new Date();
                          const twoMonthsFromNow = new Date();
                          twoMonthsFromNow.setMonth(today.getMonth() + 2);

                          return (
                            date < today || // Can't select past dates
                            date > twoMonthsFromNow || // Can't select beyond 2 months
                            date.getDay() === 0 // Can't select Sundays
                          );
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Time Slot
                    </label>
                    <Select onValueChange={setTimeSlot} value={timeSlot}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="mt-2 text-sm text-gray-500">
                      Available slots are shown based on doctor's schedule
                    </p>
                  </div>
                </div>
              </div>

              {/* Symptoms Card */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Stethoscope className="w-5 h-5 text-primary-500" />
                  <h2 className="text-xl font-semibold">Symptoms</h2> (optional)
                </div>
                <Textarea
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  placeholder="Please describe your symptoms or reason for consultation..."
                  className="h-32"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full py-6 text-lg"
                disabled={
                  !date || !timeSlot || !consultationType || !selectedDoctor
                }
              >
                Confirm Booking
              </Button>
            </form>
          </div>

          {/* Important Notes Sidebar */}
          <div className="hidden lg:block w-80 sticky top-24 h-fit">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <h3 className="font-semibold text-lg text-blue-800 mb-3">
                Important Notes:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-base text-blue-700">
                <li>
                  Your preferred doctor may not be available in the selected
                  time slot.
                </li>
                <li>
                  We will confirm the appointment and send details to your
                  email.
                </li>
                <li>
                  Please arrive 15 minutes before your scheduled appointment
                  time.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <button onClick={generateQR}>Pay</button>
      {qrCode && <img src={qrCode} alt="UPI QR Code" />}

      {/* Loader component */}
      {loading && (
        <div className="loader">
          {" "}
          {/* Add your loader styling here */}
          Loading...
        </div>
      )}
    </motion.div>
  );
}
