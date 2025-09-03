"use client";

import React from "react";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    quote:
      "The personalized care I received was exceptional. For the first time, I felt truly understood. My chronic digestive issues have vanished.",
    name: "Anjali Sharma",
    title: "Panchakarma Patient",
  },
  {
    quote:
      "Madhavansh Ayurved's approach to pain management is life-changing. I'm now living pain-free without any side effects. Highly recommended.",
    name: "Rajesh Kumar",
    title: "Arthritis Patient",
  },
  {
    quote:
      "The AI-powered diet plan was a game-changer. It was so easy to follow and perfectly aligned with my body's needs. I've never felt more energetic.",
    name: "Priya Desai",
    title: "Wellness Program",
  },
  {
    quote:
      "I was skeptical about online consultations, but the experience was seamless and the doctor was incredibly attentive. A modern approach to ancient science.",
    name: "Vikram Singh",
    title: "Online Consultation",
  },
  {
    quote:
      "After years of struggling with skin issues, their holistic treatment cleared my acne and gave me a glow I never thought possible. Thank you!",
    name: "Meera Patel",
    title: "Skin & Hair Treatment",
  },
  {
    quote:
      "The clinic has a serene and calming atmosphere. The staff is professional and caring. My stress levels have reduced significantly.",
    name: "Sunita Rao",
    title: "Stress Management",
  },
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900">
            Stories of Healing and Hope
          </h2>
          <p className="text-lg text-foreground/70 mt-4 max-w-3xl mx-auto">
            Hear from our patients who have experienced profound transformations
            on their wellness journey.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;