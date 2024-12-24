import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, AlertCircle } from 'lucide-react';
import { useAppDispatch } from '../store/hooks';
import { loginStart, loginSuccess, loginFailure } from '../store/features/authSlice';
import { authService } from '../services/authService';
import AuthVerification from '@/components/AuthVerification';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      const response = await authService.login(email, password);
      console.log(response);

      dispatch(loginSuccess({
        user: response.user,
        token: response.token
      }));
      navigate('/');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed';
      console.log(errorMessage);

      dispatch(loginFailure(errorMessage));
      setError(errorMessage);
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary-500">
        <div className="flex flex-col justify-center items-center w-full p-12">
          <img
            src="/Madhav-Ayurveda-Logo.png"
            alt="Madhav Ayurved"
            className="h-24 w-24 mb-8"
          />
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Welcome to Madhavash Ayurved
          </h1>
          <p className="text-primary-50 text-center text-lg max-w-md">
            Experience the perfect blend of ancient Ayurvedic wisdom and modern healthcare practices.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Sign In</h2>
            <p className="text-gray-600 mt-2">Welcome back! Please enter your details.</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-500" />
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          )}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <AuthVerification />
          </div>

        </div>
      </div>
    </div>
  );
}