import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppSelector";
import { useEffect } from "react";
import { authApi } from "@/api/authApi";
import { toast } from "react-hot-toast";
import { logout } from "@/store/features/authSlice";
import { CheckCircle } from "lucide-react";

// UI Components
import Hero from "@/components/Hero";
import DoctorsCarousel from "@/components/DoctorsCarousel";
import Testimonials from "@/components/Testimonials";
import AnimatedStat from "@/components/AnimatedStat";
import Sponsors from "@/components/Sponsors";

// Data
import doctorsData from "@/doctors.json";

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
      <Hero />

      {/* Welcome Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1598685392785-c40430b83a18?q=80&w=2070&auto=format&fit=crop"
              alt="Natural Ayurvedic Herbs"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">
              Welcome to Madhavansh Ayurved
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              At Madhavansh Ayurved, we believe in the power of nature to heal and restore. Our clinic is a sanctuary where ancient Ayurvedic wisdom meets modern, personalized care.
            </p>
            <p className="mt-4 text-lg text-foreground/70">
              We are dedicated to guiding you on a transformative journey towards holistic health, addressing not just the symptoms, but the root cause of imbalance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedStat value={15} label="Years of Experience" />
          <AnimatedStat value={5000} label="Patients Healed" />
          <AnimatedStat value={95} label="Success Rate" />
          <AnimatedStat value={100} label="Natural Remedies" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">
              Why Choose Madhavansh Ayurved?
            </h2>
            <p className="text-lg text-foreground/70 mt-4 max-w-3xl mx-auto">
              We offer a unique blend of authentic tradition and modern convenience for your healing journey.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <WhyChooseUsCard title="Personalized Care" description="Every treatment plan is tailored to your unique body constitution (Prakriti) and health needs." />
            <WhyChooseUsCard title="Experienced Practitioners" description="Our team consists of highly qualified and compassionate Ayurvedic doctors (Vaidyas)." />
            <WhyChooseUsCard title="Authentic Therapies" description="We use traditional methods and pure, high-quality herbal preparations for all our treatments." />
            <WhyChooseUsCard title="Holistic Approach" description="We focus on treating the root cause of illness, not just the symptoms, for lasting wellness." />
            <WhyChooseUsCard title="Modern Integration" description="We leverage technology like AI-powered diet plans to complement traditional wisdom." />
            <WhyChooseUsCard title="Serene Environment" description="Our clinic is designed to be a peaceful sanctuary that supports your healing process." />
          </div>
        </div>
      </section>

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

      {/* Sponsors Section */}
      <Sponsors />

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

// Helper component for Why Choose Us Section
const WhyChooseUsCard = ({ title, description }: { title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-lg border border-gray-200/80 shadow-sm hover:shadow-lg transition-shadow"
  >
    <div className="flex items-center mb-3">
      <CheckCircle className="w-6 h-6 text-secondary mr-3" />
      <h3 className="text-xl font-bold text-primary-900">{title}</h3>
    </div>
    <p className="text-foreground/70">{description}</p>
  </motion.div>
);