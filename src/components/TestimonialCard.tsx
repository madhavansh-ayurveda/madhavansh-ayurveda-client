"use client";

import React from "react";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  title,
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200/60 h-full flex flex-col transition-shadow hover:shadow-lg">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-accent fill-accent" />
        ))}
      </div>
      <blockquote className="text-foreground/80 italic mb-4 flex-grow">
        "{quote}"
      </blockquote>
      <div>
        <p className="font-semibold text-primary-900">{name}</p>
        <p className="text-sm text-foreground/60">{title}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;