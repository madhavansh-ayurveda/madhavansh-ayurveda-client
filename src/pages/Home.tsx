import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  BrainCircuit,
  Sparkles,
  Stethoscope,
  Bot,
  ChevronRight,
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppSelector";
import { useEffect } from "react";
import { authApi } from "@/api/authApi";
import { toast } from "react-hot-toast";
import { logout } from "@/store/features/authSlice";
import Cookies from "js-cookie";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { HoverEffect } from "@/components/ui/hover-effect";
import treatmentData from "@/assets/treatment.json";
import doctorsData from "@/doctors.json";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

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
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden text-center px-4 py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/ayurveda3.jpg"
            alt="Lush Ayurvedic herbs and ingredients"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 space-y-6 max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-primary-900">
            Ancient Wisdom, Modern Wellness
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Rediscover balance and vitality through authentic Ayurvedic care,
            personalized for your unique constitution and powered by modern
            insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-consultation">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-primary/90 transition-all w-full sm:w-auto"
              >
                Book a Consultation
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary border border-primary/20 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-primary-50 transition-all w-full sm:w-auto"
              >
                Explore Services
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

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

      {/* Meet Our Doctors Section */}
      <section className="py-20 px-4">
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
            className="text-lg text-foreground/70 mb-12 max-w-3xl mx-auto"
          >
            Our team of dedicated and experienced Ayurvedic doctors is here to
            guide you on your path to health.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-row items-center justify-center mb-10 w-full"
          >
            <AnimatedTooltip items={doctors} />
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary-900">
            Stories of Healing and Hope
          </h2>
          <div className="relative flex flex-col items-center justify-center">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </section>

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

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"></div>
);

const bentoItems = [
  {
    title: "Holistic Approach",
    description: "We treat the root cause, not just the symptoms, for lasting wellness.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <Heart className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI-Powered Wellness Plans",
    description: "Leveraging AI to create hyper-personalized diet, lifestyle, and treatment plans.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <Bot className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Expert Practitioners",
    description: "Our team of certified Vaidyas brings decades of experience.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <Stethoscope className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Personalized Care",
    description: "Every treatment is tailored to your unique body constitution (Prakriti).",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <Sparkles className="h-4 w-4 text-neutral-500" />,
  },
];

const testimonials = [
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