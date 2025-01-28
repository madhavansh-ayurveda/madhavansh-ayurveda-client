import { api } from "./axios";

interface FeedbackData {
  consultationId: String;
  ratings: {
    question: String | null;
    rating: Number | null
  }[]
  additionalComments: String
}

export const feedbackApi = {
  sendFeedback: async (data: FeedbackData) => {
    const response = await api.post("/feedback/submit", data);
    return response.data;
  },
};
