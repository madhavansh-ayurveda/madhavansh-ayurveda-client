"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Doctor {
  id: string;
  name: string;
  designation: string;
  image: string;
}

interface DoctorsCarouselProps {
  doctors: Doctor[];
}

const DoctorsCarousel: React.FC<DoctorsCarouselProps> = ({ doctors }) => {
  return (
    <div className="relative w-full overflow-x-auto py-8 no-scrollbar">
      <motion.div
        className="flex gap-8 px-4"
        drag="x"
        dragConstraints={{ left: -200 * doctors.length, right: 0 }}
        dragElastic={0.1}
      >
        {doctors.map((doctor) => (
          <motion.div
            key={doctor.id}
            className="flex-shrink-0 w-72 bg-white rounded-2xl shadow-lg overflow-hidden group"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative h-80">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">{doctor.name}</h3>
                <p className="text-white/80">{doctor.designation}</p>
              </div>
            </div>
            <div className="p-6 bg-white">
              <Link
                to={`/book-consultation?doctor=${doctor.id}`}
                className="block w-full bg-primary text-primary-foreground text-center py-3 rounded-lg font-semibold group-hover:bg-primary/90 transition-colors"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default DoctorsCarousel;