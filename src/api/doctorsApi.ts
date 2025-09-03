import { api } from './axios';
import { ApiResponse, DoctorsResponse, DoctorResponse } from '@/types/api';

export const doctorsApi = {
    getAllActiveDoctors: async (): Promise<ApiResponse<DoctorsResponse>> => {
        const response = await api.get<ApiResponse<DoctorsResponse>>('/doctors/active');
        return response.data;
    },

    getDoctorById: async (id: string): Promise<ApiResponse<DoctorResponse>> => {
        const response = await api.get<ApiResponse<DoctorResponse>>(`/doctors/${id}`);
        return response.data;
    }
}; 