"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544161515-cfd836b080e3?q=80&w=2070&auto=format&fit=crop"
          alt="Ayurvedic Healing"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Rediscover Balance. Embrace Wellness.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-white/90"
        >
          Experience the timeless wisdom of Ayurveda, tailored for modern living.
          Your journey to holistic health starts here.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10"
        >
          <Link to="/book-consultation">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-primary/90 transition-all transform hover:scale-105">
              Book a Consultation
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}