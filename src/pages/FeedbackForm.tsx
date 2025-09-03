import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { feedbackApi } from "@/api/feedbackApi";
import { useParams } from "react-router-dom";
import { FeedbackRadioRating } from "@/components/FeedbackRadioRating";
import { consultationApi } from "@/api/consultationApi";
import { Input } from "@/components/ui/input";
// import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

export const FeedbackForm = () => {
  const [experienceRating, setExperienceRating] = useState<number | null>(null);
  const [consultationOnTime, setConsultationOnTime] = useState("");
  const [professionalismRating, setProfessionalismRating] = useState<
    number | null
  >(null);
  const [concernsAddressed, setConcernsAddressed] = useState<number | null>(
    null
  );
  const [usabilityRating, setUsabilityRating] = useState<number | null>(null);
  const [cleanessRating, setCleanessRating] = useState<number | null>(null);
  const [additionalComments, setAdditionalComments] = useState("");
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchConsultations = async () => {
      if (id) {
        console.log(id);
        const response = await consultationApi.getConsultationById(id);
        console.log(response);
        if (response.success) {
          setName(response.data.name);
          setEmail(response.data.email);
        }
      }
    };
    fetchConsultations();
  }, [id]);

  const handleSubmit = async () => {
    try {
      const feedbackData = {
        consultationId: id || "",
        ratings: questions.map(({ question, value }) => ({
          question,
          rating: value,
        })),
        additionalComments,
      };
      console.log(feedbackData);

      await feedbackApi.sendFeedback(feedbackData);
      alert("Feedback sent successfully!");
    } catch (error) {
      console.error("Error sending feedback:", error);
    }
  };

  // Questions array
  const questions = [
    {
      question: "How would you rate your overall experience?",
      value: experienceRating,
      onChange: setExperienceRating,
    },
    {
      question: "How would you rate your Clinic's cleaniness?",
      value: cleanessRating,
      onChange: setCleanessRating,
    },
    {
      question: "Were your concerns adequately addressed?",
      value: concernsAddressed,
      onChange: (value: number) => setConcernsAddressed(value),
    },
    {
      question: "How would you rate the doctor's professionalism?",
      value: professionalismRating,
      onChange: setProfessionalismRating,
    },
    {
      question: "How was the platform usability?",
      value: usabilityRating,
      size: 10,
      onChange: setUsabilityRating,
    },
  ];

  const radio2Questions = [
    {
      question: "Was the consultation started on time?",
      value: consultationOnTime === "Yes" ? 1 : 0,
      onChange: (value: number) =>
        setConsultationOnTime(value === 1 ? "Yes" : "No"),
    },
  ];

  return (
    <>
      <div className="flex justify-center mb-5">
        <div className="feedback-form p-4 px-20 bg-white rounded shadow-md border">
          <h2 className="text-2xl font-bold mb-4">Feedback</h2>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 p-2 border rounded w-full"
            disabled
          />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 p-2 border rounded w-full"
            disabled
          />

          {questions.map((q, index) => (
            <FeedbackRadioRating
              key={index}
              question={q.question}
              value={q.value || 0}
              onChange={q.onChange}
            />
          ))}

          {radio2Questions.map((q, index) => (
            <>
              <div key={index} className="mb-4">
                <Label className="block mb-2 text-[1rem] font-medium text-gray-700">
                  {q.question}
                </Label>{" "}
                <div className="flex items-center space-x-2 flex">
                  <input
                    type="radio"
                    onChange={() => q.onChange(1)}
                    className="h-6 w-6 text-blue-600 border-gray-300 focus:ring-blue-500"
                    required
                  />
                  <Label className="text-md">Yes</Label>
                  <input
                    type="radio"
                    onChange={() => q.onChange(0)}
                    className="h-6 w-6 text-blue-600 border-gray-300 focus:ring-blue-500"
                    required
                  />
                  <Label className="text-md">No</Label>
                </div>
              </div>
            </>
          ))}

          <Textarea
            placeholder="Any additional comments or suggestions?"
            value={additionalComments}
            onChange={(e) => setAdditionalComments(e.target.value)}
            className="mb-4 min-h-28"
          />

          <div className="flex justify-between">
            <Button
              onClick={handleSubmit}
              variant="outline"
              className="bg-[#006d77] md:w-1/2 text-gray-200 hover:text-white hover:bg-[#004c5a]"
            >
              Submit Feedback
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
