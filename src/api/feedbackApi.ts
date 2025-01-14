import { api } from "./axios";

interface FeedbackData {
  consultationId: string;
  feedback: string;
  // rating: number;
  userName: string;
  userEmail: string;
  // Add the new properties here
  experienceRating: number | null;
  consultationOnTime: string | null;
  professionalismRating: number | null;
  concernsAddressed: number | null;
  usabilityRating: number | null;
  additionalComments: string | null;
}

export const feedbackApi = {
  sendFeedback: async (data: FeedbackData) => {
    const response = await api.post("/api/feedback", data);
    return response.data;
  },
};
