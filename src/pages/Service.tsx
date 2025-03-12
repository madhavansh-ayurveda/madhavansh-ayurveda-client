import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import services from "../assets/service.json";
import { Service } from "@/types/service";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
// import { useState } from 'react';
import { ImageWithSkeleton } from "@/components/image-with-skeleton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export const ServicePage = () => {
  const { serviceId } = useParams();
  const service = services.find(s => s.route === serviceId) as Service | undefined;

  if (!service) return <div className="text-center py-20">Service not found</div>;

  // Test URLs directly in browser first
  console.log(service.content.image); // Should output valid URL

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-6xl mx-auto px-4 py-8"
    >
      {/* Header Section */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 mb-12"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 font-serif">
            {service.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {service.description}
          </p>
        </div>
        {service.content.image && (
          <ImageWithSkeleton
            src={service.content.image}
            alt={service.title}
          />
        )}
      </motion.div>

      {/* Content Sections */}
      <motion.div
        className="space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Overview Section */}
        <motion.section
          variants={itemVariants}
          className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-4 h-4 bg-primary-500 rounded-full mr-2"></span>
            Overview
          </h2>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {service.content.overview}
          </p>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          variants={itemVariants}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-white opacity-50 -rotate-1 transform scale-105"></div>
          <div className="relative p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Key Benefits
            </h2>
            <motion.ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.content.benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-start space-x-2 p-4 bg-white rounded-lg shadow-xs hover:shadow-sm transition-shadow"
                  whileHover={{ scale: 1.02 }}
                >
                  <CheckCircleIcon className="w-6 h-6 text-primary-600" />
                  <span className="text-gray-600">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.section>

        {/* Procedure Section */}
        <motion.section
          variants={itemVariants}
          className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Treatment Procedure</h2>
          <div className="space-y-4">
            {service.content.procedure.split('\n').map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3 pl-4 border-l-4 border-primary-500"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <span className="text-primary-600 font-bold">{index + 1}.</span>
                <p className="text-gray-600">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Duration & Ideal For */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {/* Duration Card */}
          {service.content.duration && (
            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Session Duration</h3>
              <div className="flex items-center space-x-2">
                <span className="text-3xl text-primary-600">⏳</span>
                <p className="text-gray-600 text-xl font-medium">
                  {service.content.duration}
                </p>
              </div>
            </motion.div>
          )}

          {/* Ideal For Card */}
          {service.content.idealFor && (
            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Ideal For</h3>
              <ul className="space-y-2">
                {service.content.idealFor.map((condition, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-2 text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span>{condition}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Floating Action Button */}
      {/* <motion.div
        className="fixed bottom-8 right-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          className="bg-primary-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-primary-700 transition-colors flex items-center space-x-2 overflow-hidden"
          whileHover={{
            scale: 1.05,
            transition: { type: 'spring', stiffness: 300, damping: 10 }
          }}
        >
          <motion.span
            initial={{ width: 'auto' }}
            animate={{ width: 'auto' }}
            className="whitespace-nowrap flex items-center"
          >
            <motion.span>Book Consultation</motion.span>
            <motion.span
              className="ml-2 text-xl"
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ 
                opacity: 1,
                x: 0,
                transition: { delay: 0.1 }
              }}
            >
              →
            </motion.span>
          </motion.span>
        </motion.button>
      </motion.div> */}
    </motion.div>
  );
}; 