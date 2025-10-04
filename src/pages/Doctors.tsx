import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { doctorsService } from "@/services/doctorsService";
import {
  fetchDoctorsStart,
  fetchDoctorsSuccess,
  fetchDoctorsFailure,
} from "@/store/features/doctorsSlice";
import { toast } from "react-hot-toast";
import DoctorCard from "@/components/DoctorCard";

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
    const fetchDoctors = async () => {
      if (
        doctors.length > 0 &&
        lastFetched &&
        Date.now() - lastFetched < CACHE_DURATION
      ) {
        return; // Use cached data
      }

      dispatch(fetchDoctorsStart());
      try {
        const data = await doctorsService.getAllActiveDoctors();
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
            src="/ayurveda2.jpg"
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
        <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Doctors</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors &&
            doctors.map((doctor) => (
              <motion.div
                key={doctor._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <DoctorCard doctor={doctor} />
              </motion.div>
            ))}
        </div>
      </div>
    </>
  );
}