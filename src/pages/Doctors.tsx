import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { doctorsService } from '@/services/doctorsService';
// import { Doctor } from '@/types';
import {
  fetchDoctorsStart,
  fetchDoctorsSuccess,
  fetchDoctorsFailure,
} from '@/store/features/doctorsSlice';
import { toast } from 'react-hot-toast';

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

export default function Doctors() {
  const dispatch = useAppDispatch();
  const { doctors, isLoading, error, lastFetched } = useAppSelector(state => state.doctors);

  useEffect(() => {
    console.log(doctors);
    const fetchDoctors = async () => {
      // Check if we have cached data that's still fresh
      if (doctors.length > 0 && lastFetched && Date.now() - lastFetched < CACHE_DURATION) {
        return; // Use cached data
      }

      //Fetch the data if not available
      dispatch(fetchDoctorsStart());
      try {
        const data = await doctorsService.getAllActiveDoctors();

        dispatch(fetchDoctorsSuccess(data));
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch doctors';
        dispatch(fetchDoctorsFailure(errorMessage));
        toast.error(errorMessage);
      }
    };

    fetchDoctors();
  }, [dispatch, doctors.length, lastFetched]);

  if (isLoading) return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
    </div>
  );

  if (error) return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="text-red-500">Error: {error}</div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Our Expert Practitioners</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors && doctors.map((doctor) => (
          <motion.div
            key={doctor._id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative h-64">
              {/* <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover"
              /> */}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
              <p className="text-primary-600 font-medium">{doctor.specialization}</p>
              <p className="text-gray-600 mt-2">{doctor.experience} years experience</p>
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-900">Expertise:</p>
                {/* <div className="mt-2 flex flex-wrap gap-2">
                  {doctor.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div> */}
              </div>
              <Link
                to={`/book-consultation?doctor=${doctor._id}`}
                className="mt-6 block w-full bg-primary-500 text-white text-center py-3 rounded-lg hover:bg-primary-600 transition-colors"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Treatment Images Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-8">Our Treatments & Facilities</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="/treatment-1.jpg"
              alt="Ayurvedic Massage Treatment"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold">Traditional Ayurvedic Therapies</h4>
              <p className="text-gray-600">Expert therapeutic treatments for holistic healing</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="/treatment-2.jpg"
              alt="Herbal Medicine Preparation"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold">Herbal Medicine Preparation</h4>
              <p className="text-gray-600">Traditional herbs and modern preparation techniques</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}