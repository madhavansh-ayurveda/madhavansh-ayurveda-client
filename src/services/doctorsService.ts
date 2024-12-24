import { doctorsApi } from '../api/doctorsApi';
import { Doctor } from '@/types';
import { getErrorMessage } from '../utils/apiErrorHandler';

export const doctorsService = {
    getAllActiveDoctors: async (): Promise<Doctor[]> => {
        try {
            const response = await doctorsApi.getAllActiveDoctors();
            if (!response.success) {
                throw new Error(response.message || 'Failed to fetch doctors');
            }
            // Transform each doctor from the API response
            // console.log(response);

            return response.data.doctors;
        } catch (error) {
            throw getErrorMessage(error);
        }
    },

    getDoctorById: async (id: string): Promise<Doctor> => {
        try {
            const response = await doctorsApi.getDoctorById(id);
            if (!response.success) {
                throw new Error(response.message || 'Failed to fetch doctor');
            }
            return response.data.doctor;
        } catch (error) {
            throw getErrorMessage(error);
        }
    }
}; 