"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        poster="/ayurveda3.jpg" // Fallback image
      >
        <source
          src="https://videos.pexels.com/video-files/8129883/8129883-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 space-y-6 max-w-4xl px-4">
        <TextGenerateEffect
          words="Harmony for Body, Mind, and Spirit"
          className="text-4xl md:text-6xl font-bold leading-tight text-white"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
        >
          Experience the future of holistic health. We blend ancient Ayurvedic
          traditions with modern AI to create a wellness path that's uniquely
          yours.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/book-consultation">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-primary/90 transition-all w-full sm:w-auto"
            >
              Begin Your Journey
            </motion.button>
          </Link>
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-white/30 transition-all w-full sm:w-auto"
            >
              Discover Therapies
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;