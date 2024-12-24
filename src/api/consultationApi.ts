import { api } from "./axios";
import { Consultation, Prescription } from "@/types";
// import { Prescription } from './prescriptionApi';

export const consultationApi = {
	create: async (consultationData: Consultation) => {
		const response = await api.post('/consultations', consultationData);
		console.log(response);
		return response.data;
	},

	getMyConsultations: async (userId: string) => {
		const response = await api.get(`/consultations/user/${userId}`);
		// console.log(response);
		return response.data;
	},

	getConsultationById: async (id: string) => {
		const response = await api.get(`/consultations/${id}`);
		return response.data;
	},

	updateStatus: async (id: string, status: string) => {
		const response = await api.patch(`/consultations/${id}/status`, { status });
		return response.data;
	},


	addPrescription: async (id: string, prescription: Prescription) => {
		const response = await api.patch(`/consultations/${id}/prescription`, prescription);
		return response.data;
	},

	cancelConsultation: async (id: string) => {
		const response = await api.patch(`/consultations/${id}/status`, { status: 'cancelled' });
		return response.data;
	},

	getDoctorConsultations: async (doctorId: string) => {
		const response = await api.get(`/consultations/doctor/${doctorId}`);
		return response.data;
	},

	getUpcomingConsultations: async () => {
		const response = await api.get('/consultations/upcoming');
		return response.data;
	},

	getPastConsultations: async () => {
		const response = await api.get('/consultations/past');
		return response.data;
	}
}; 