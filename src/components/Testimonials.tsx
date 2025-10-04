import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

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
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

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
            Hear from our patients who have experienced profound transformations.
          </p>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonialsData.map((testimonial, index) => (
              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4" key={index}>
                <motion.div
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200/60 h-full flex flex-col"
                  initial={{ scale: 0.9, opacity: 0.5 }}
                  animate={{
                    scale: selectedIndex === index ? 1 : 0.9,
                    opacity: selectedIndex === index ? 1 : 0.5,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                    ))}
                  </div>
                  <blockquote className="text-foreground/80 italic mb-6 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-primary-900">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">{testimonial.title}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;