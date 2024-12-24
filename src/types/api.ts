import { Doctor, ApiDoctorSchema } from './index';
import { User } from './index';

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

export interface DoctorsResponse {
  doctors: ApiDoctorSchema[];
}

export interface DoctorResponse {
  doctor: ApiDoctorSchema;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface RegisterResponse {
  user: User;
  token: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface CheckAuthResponse {
  user: User;
} 