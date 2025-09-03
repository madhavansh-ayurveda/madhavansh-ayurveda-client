"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "The personalized care I received was exceptional. The AI-driven plan was surprisingly accurate and helped me understand my body better than ever before. I feel rejuvenated.",
    name: "Priya Sharma",
    title: "IT Professional",
  },
  {
    quote:
      "I was skeptical about the blend of Ayurveda and AI, but the results speak for themselves. My chronic digestive issues have vanished. Highly recommended!",
    name: "Rohan Mehta",
    title: "Entrepreneur",
  },
  {
    quote:
      "A truly holistic experience. The doctors are incredibly knowledgeable, and the atmosphere is so calming. It's the perfect escape for healing and recovery.",
    name: "Anjali Desai",
    title: "Yoga Instructor",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900">
            Stories of Transformation
          </h2>
          <p className="text-lg text-foreground/70 mt-4 max-w-3xl mx-auto">
            Hear from our clients who have experienced profound changes on their
            wellness journey with us.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <blockquote className="text-foreground/80 italic mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-right">
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">
                  {testimonial.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}