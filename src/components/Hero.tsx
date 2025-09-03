"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        {/* Text Content Section */}
        <motion.div
          className="flex flex-col justify-center p-8 md:p-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight"
          >
            Your Path to Natural
            <br />
            <span className="text-secondary">Holistic Wellness</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-foreground/70 max-w-xl"
          >
            Experience the synergy of ancient Ayurvedic wisdom and modern AI to
            unlock your body's natural healing potential. Personalized care for
            a balanced life.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link to="/book-consultation">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-primary/90 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-primary border border-primary/30 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-all w-full sm:w-auto"
              >
                Explore Our Services
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <div className="hidden lg:block h-full w-full">
          <motion.div
            className="h-full w-full"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/ayurveda-hero.jpg"
              alt="Serene Ayurvedic setup with herbs and oils"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;