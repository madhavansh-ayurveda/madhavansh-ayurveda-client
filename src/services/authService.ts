import { authApi } from '../api/authApi';
import { getErrorMessage } from '../utils/apiErrorHandler';
import { User } from '@/types';
import { AuthResponse } from '@/types/api';

export const authService = {
    register: async (email: string, password: string, name: string, age: number, phone: string): Promise<AuthResponse> => {
        try {
            const response = await authApi.register({
                email,
                password,
                name,
                age,
                phone
            });
            
            if (!response.success) {
                throw new Error(response.message || 'Registration failed');
            }
            
            return response.data;
        } catch (error) {
            throw getErrorMessage(error);
        }
    },

    login: async (email: string, password: string): Promise<AuthResponse> => {
        try {
            const response = await authApi.login({ email, password });
            
            if (!response.success) {
                throw new Error(response.message || 'Login failed');
            }
            return response.data;
        } catch (error) {
            throw getErrorMessage(error);
        }
    },

    logout: async (): Promise<void> => {
        try {
            const response = await authApi.logout();
            
            if (!response.success) {
                throw new Error(response.message || 'Logout failed');
            }
        } catch (error) {
            throw getErrorMessage(error);
        }
    },

    checkAuth: async (): Promise<User> => {
        try {
            const response = await authApi.checkAuth();
            
            if (!response.success) {
                throw new Error(response.message || 'Auth check failed');
            }
            
            return response.data.user;
        } catch (error) {
            throw getErrorMessage(error);
        }
    }
}; 