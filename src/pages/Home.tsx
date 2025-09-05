import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Sparkles, Stethoscope, Bot } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppSelector";
import { useEffect } from "react";
import { authApi } from "@/api/authApi";
import { toast } from "react-hot-toast";
import { logout } from "@/store/features/authSlice";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { HoverEffect } from "@/components/ui/hover-effect";
import treatmentData from "@/assets/treatment.json";
import doctorsData from "@/doctors.json";
import Testimonials from "@/components/Testimonials";
import Sponsors from "@/components/Sponsors";
import DoctorsCarousel from "@/components/DoctorsCarousel";
import Hero from "@/components/Hero";

export default function Home() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const checkUserFunc = async () => {
      if (user) {
        try {
          const checkUser = await authApi.checkAuth();
          if (!checkUser.success) {
            dispatch(logout());
            toast.error("Session expired. Please log in again.");
          }
        } catch (error) {
          dispatch(logout());
        }
      }
    };
    checkUserFunc();
  }, [user, dispatch]);

  const services = treatmentData.slice(0, 6).map((treatment) => ({
    title: treatment.title,
    description: treatment.description,
    link: `/treatments${treatment.href}`,
  }));

  const doctors = doctorsData.doctors.map((doctor) => ({
    id: doctor.id,
    name: doctor.name,
    designation: doctor.specialization,
    image: doctor.image,
  }));

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="bg-background text-foreground"
    >
      {/* New Hero Section */}
      <Hero />

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">
              A New Era of Ayurvedic Healing
            </h2>
            <p className="text-lg text-foreground/70 mt-4 max-w-3xl mx-auto">
              We integrate timeless Ayurvedic principles with cutting-edge
              technology to offer you a truly personalized and effective path
              to wellness.
            </p>
          </motion.div>
          <BentoGrid className="auto-rows-[22rem]">
            {bentoItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
                icon={item.icon}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">
              Our Signature Treatments
            </h2>
            <p className="text-lg text-foreground/70 mt-4 max-w-3xl mx-auto">
              Discover our range of therapies designed to restore balance,
              rejuvenate the body, and calm the mind.
            </p>
          </motion.div>
          <HoverEffect items={services} />
        </div>
      </section>

      {/* Sponsors Section */}
      <Sponsors />

      {/* Meet Our Doctors Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary-900 mb-4"
          >
            Meet Our Expert Practitioners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/70 mb-8 max-w-3xl mx-auto"
          >
            Our team of dedicated and experienced Ayurvedic doctors is here to
            guide you on your path to health.
          </motion.p>
        </div>
        <DoctorsCarousel doctors={doctors} />
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary-50 to-secondary-50 p-12 rounded-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary-900"
          >
            Ready to Begin Your Transformation?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/70 mt-4 mb-8"
          >
            Your personalized path to wellness is just a click away. Schedule
            your initial consultation today.
          </motion.p>
          <Link to="/book-consultation">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-primary/90 transition-all"
            >
              Schedule My Consultation
            </motion.button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
}

const BentoImage = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    className="flex-1 w-full h-full object-cover rounded-xl"
  />
);

const bentoItems = [
  {
    title: "Holistic Approach",
    description:
      "We treat the root cause, not just the symptoms, for lasting wellness.",
    header: <BentoImage src="https://images.unsplash.com/photo-1540420773420-2850a43d215f?q=80&w=1974&auto=format&fit=crop" alt="Holistic healing" />,
    className: "md:col-span-1",
    icon: <Heart className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI-Powered Wellness Plans",
    description:
      "Leveraging AI to create hyper-personalized diet, lifestyle, and treatment plans.",
    header: <BentoImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" alt="AI and technology" />,
    className: "md:col-span-2",
    icon: <Bot className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Expert Practitioners",
    description:
      "Our team of certified Vaidyas brings decades of experience.",
    header: <BentoImage src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" alt="Expert doctor" />,
    className: "md:col-span-1",
    icon: <Stethoscope className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Personalized Care",
    description:
      "Every treatment is tailored to your unique body constitution (Prakriti).",
    header: <BentoImage src="https://images.unsplash.com/photo-1584515933487-779824d27937?q=80&w=2070&auto=format&fit=crop" alt="Personalized consultation" />,
    className: "md:col-span-2",
    icon: <Sparkles className="h-4 w-4 text-neutral-500" />,
  },
];