import { Label } from "@/components/ui/label";

interface FeedbackRadioRatingProps {
  question: string;
  value: number;
  onChange: (value: number) => void;
}

export const FeedbackRadioRating = ({
  question,
  value,
  onChange,
}: FeedbackRadioRatingProps) => {
  return (
    <div className="mb-8 flex flex-col">
      {/* Question Label */}
      <Label className="block mb-2 text-[1rem] font-medium text-gray-700">
        {question}
      </Label>

      {/* Radio Group for 10-point Rating */}
      <div className="flex flex-wrap gap-5">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((rating) => (
          <div key={rating} className="flex items-center space-x-2">
            <input
              type="radio"
              value={rating}
              id={`rating-${rating}`}
              checked={value === rating}
              onChange={() => onChange(rating)}
              className="h-6 w-6 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <Label htmlFor={`rating-${rating}`} className="text-md">
              {rating}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};
