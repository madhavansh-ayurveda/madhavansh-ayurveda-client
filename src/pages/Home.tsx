import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Stethoscope, Leaf } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppSelector";
import { useEffect } from "react";
import { authApi } from "@/api/authApi";
import { toast } from "react-hot-toast";
import { logout } from "@/store/features/authSlice";

// UI Components
import { HoverEffect } from "@/components/ui/hover-effect";
import DoctorsCarousel from "@/components/DoctorsCarousel";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

// Data
import treatmentData from "@/assets/treatment.json";
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
      <Hero />

      {/* Core Principles Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">
              The Madhavansh Way: Ancient Wisdom, Modern Care
            </h2>
            <p className="text-lg text-foreground/70 mt-4 max-w-3xl mx-auto">
              We blend the timeless science of Ayurveda with a compassionate, personalized approach to guide you toward holistic well-being.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Heart className="w-8 h-8 text-primary" />}
              title="Holistic Healing"
              description="We look beyond symptoms to treat the root cause, restoring your body's natural balance for long-term health."
            />
            <FeatureCard
              icon={<Stethoscope className="w-8 h-8 text-primary" />}
              title="Expert Guidance"
              description="Our team of experienced Vaidyas provides authentic Ayurvedic care, tailored to your unique constitution."
            />
            <FeatureCard
              icon={<Leaf className="w-8 h-8 text-primary" />}
              title="Natural Therapies"
              description="Embrace the healing power of nature with our pure herbal remedies, therapeutic massages, and detoxification programs."
            />
          </div>
        </div>
      </section>

      {/* Our Treatments Section */}
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

      {/* A Glimpse Into Our Clinic */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">
              A Sanctuary for Healing
            </h2>
            <p className="text-lg text-foreground/70 mt-4 max-w-3xl mx-auto">
              Step into a space designed for tranquility and rejuvenation, where your healing journey begins.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px]">
            <GalleryImage src="https://images.unsplash.com/photo-1581888946354-060a755d59a0?q=80&w=2070&auto=format&fit=crop" alt="Herbal oils" className="row-span-2" />
            <GalleryImage src="https://images.unsplash.com/photo-1600334022496-837c4b7de3a4?q=80&w=1974&auto=format&fit=crop" alt="Shirodhara treatment" />
            <GalleryImage src="https://images.unsplash.com/photo-1598685392785-c40430b83a18?q=80&w=2070&auto=format&fit=crop" alt="Ayurvedic herbs" />
            <GalleryImage src="https://images.unsplash.com/photo-1519824145371-296894a0d72b?q=80&w=2070&auto=format&fit=crop" alt="Relaxing massage" className="col-span-2" />
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

// Helper component for Core Principles
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center"
  >
    <div className="flex justify-center items-center mb-4">
      <div className="bg-primary/10 p-4 rounded-full">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-foreground/70">{description}</p>
  </motion.div>
);

// Helper component for Gallery
const GalleryImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
  <motion.div
    className={`overflow-hidden rounded-lg shadow-lg ${className}`}
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </motion.div>
);