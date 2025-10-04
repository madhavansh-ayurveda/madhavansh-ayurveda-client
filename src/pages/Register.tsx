import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import AuthVerification from '@/components/AuthVerification';
import { motion } from 'framer-motion';

export default function Register() {
  const [error, setError] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex"
    >
      {/* Left Side - Image & Welcome Message */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src="/ayurveda3.jpg"
          alt="Ayurvedic Herbs"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-900/70" />
        <div className="relative z-10 flex flex-col justify-center items-center w-full p-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/Madhav-Ayurveda-Logo.png"
              alt="Madhav Ayurved"
              className="h-24 w-24 mb-8 rounded-full shadow-lg"
            />
            <h1 className="text-4xl font-bold text-center mb-4">
              Join Our Wellness Community
            </h1>
            <p className="text-primary-50 text-center text-lg max-w-md">
              Create your account to begin a personalized journey towards holistic health and natural healing.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Create an Account</h2>
            <p className="text-gray-600 mt-2">
              Already have an account?{' '}
              <Link to="/auth" className="font-medium text-primary hover:underline">
                Sign In
              </Link>
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-500" />
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          )}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <AuthVerification onError={setError} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}