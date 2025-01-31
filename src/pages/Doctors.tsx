import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { doctorsService } from "@/services/doctorsService";
// import { Doctor } from '@/types';
import {
  fetchDoctorsStart,
  fetchDoctorsSuccess,
  fetchDoctorsFailure,
} from "@/store/features/doctorsSlice";
import { toast } from "react-hot-toast";

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Doctors() {
  const dispatch = useAppDispatch();
  const { doctors, isLoading, error, lastFetched } = useAppSelector(
    (state) => state.doctors
  );

  useEffect(() => {
    console.log(doctors);
    console.log(doctors[0]?.availability);
    const fetchDoctors = async () => {
      if (
        doctors.length > 0 &&
        lastFetched &&
        Date.now() - lastFetched < CACHE_DURATION
      ) {
        return; // Use cached data
      }

      //Fetch the data if not available
      dispatch(fetchDoctorsStart());
      try {
        const data = await doctorsService.getAllActiveDoctors();
        console.log(data);
        if (data.length === 0) {
          dispatch(fetchDoctorsFailure("No doctors found"));
          return;
        }

        dispatch(fetchDoctorsSuccess(data));
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to fetch doctors";
        dispatch(fetchDoctorsFailure(errorMessage));
        toast.error(errorMessage);
      }
    };

    fetchDoctors();
  }, [dispatch, doctors.length, lastFetched]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );

  return (
    <>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        className="relative h-[60vh] bg-primary-600 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.jpg"
            alt="Ayurveda Background"
            className="w-full h-full object-cover"
            style={{
              transform: "scale(1.1)",
              opacity: 0.3,
            }}
          />
        </div>
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-100">
            Our <span className="text-yellow-400"> Expert Practitioners</span>
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Dedicated to providing authentic Ayurvedic healthcare services to
            our patients by combining ancient wisdom with modern medical
            practices.
          </p>
        </div>
      </motion.section>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-12">Our Doctors</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors &&
            doctors.map((doctor) => (
              <motion.div
                key={doctor._id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* 
            <div className="relative h-64">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />
            </div>
               */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {doctor.name}
                  </h3>
                  <p className="text-primary-600 font-medium">
                    {doctor.specialization.join(", ")}
                  </p>
                  <p className="text-gray-600 mt-2">
                    {doctor.experience} years experience
                  </p>
                  <div className="mt-4 flex items-center">
                    <p className="font-medium text-gray-900">Availability:</p>
                    {doctor?.availability && (
                      <div key={doctor.availability._id} className="ml-2">
                        <p className="font-medium">
                          {doctor.availability.days.join(", ")}
                        </p>
                        {/* {doctor.availability.slots.map((slot, slotIndex) => (
                      <div key={slotIndex} className="text-gray-600">
                        {slot.map((time, timeIndex) => (
                          <span key={timeIndex} className="mr-2">
                            {time.startTime}-{time.endTime} ,
                          </span>
                        ))}
                      </div>
                    ))} */}
                      </div>
                    )}
                  </div>
                  <Link
                    to={`/book-consultation?doctor=${doctor._id}`}
                    className="mt-6 block w-full bg-primary-500 text-white text-center py-3 rounded-lg hover:bg-primary-700 hover:text-gray-300 transition-colors"
                  >
                    Book Appointment
                  </Link>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Treatment Images Section */}
        {/* <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-8">
          Our Treatments & Facilities
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="/treatment-1.jpg"
              alt="Ayurvedic Massage Treatment"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold">
                Traditional Ayurvedic Therapies
              </h4>
              <p className="text-gray-600">
                Expert therapeutic treatments for holistic healing
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="/treatment-2.jpg"
              alt="Herbal Medicine Preparation"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold">
                Herbal Medicine Preparation
              </h4>
              <p className="text-gray-600">
                Traditional herbs and modern preparation techniques
              </p>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
}
