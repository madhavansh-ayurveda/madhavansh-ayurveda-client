import { api } from './axios';
import { ApiResponse, LoginResponse, RegisterResponse, CheckAuthResponse } from '@/types/api';

export const authApi = {
    register: async (userData: {
        email: string;
        password: string;
        name: string;
        age: number;
        phone: string;
    }): Promise<ApiResponse<RegisterResponse>> => {
        const response = await api.post<ApiResponse<RegisterResponse>>('/auth/register', userData);
        return response.data;
    },

    login: async (credentials: {
        email: string;
        password: string;
    }): Promise<ApiResponse<LoginResponse>> => {
        const response = await api.post<ApiResponse<LoginResponse>>('/auth/login', credentials);
        return response.data;
    },

    logout: async (): Promise<ApiResponse<null>> => {
        const response = await api.post<ApiResponse<null>>('/auth/logout');
        return response.data;
    },

    checkAuth: async (): Promise<ApiResponse<CheckAuthResponse>> => {
        const response = await api.get<ApiResponse<CheckAuthResponse>>('/auth/check');
        return response.data;
    },

    verifyOtp: async (name: string, contact: string, otp: string) => {
        const response = await api.post('/auth/verifyOtp', { name, contact, otp });
        console.log(response)
        return response.data;
    },

    sendOtp: async (name: string, contact: string) => {
        const response = await api.post('/auth/sendOtp', { name, contact });
        console.log(response)
        return response.data;
    },

}; 