"use client";

import HeroSection from "@/components/home/HeroSection";
import TreatmentsSection from "@/components/home/TreatmentsSection";
import DoctorsSection from "@/components/home/DoctorsSection";
import ServicesGridSection from "@/components/home/ServicesGridSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BookingSection from "@/components/home/BookingSection";
import Sponsors from "@/components/Sponsors";

export default function AyurvedicClinicLanding() {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/home-background.jpg')" }}>
      {/* Overlay to reduce background visibility */}
      <div className="absolute inset-0 bg-white bg-opacity-50 z-0" />

      {/* Content above the overlay */}
      <div className="relative z-10">
        <HeroSection />
        <TreatmentsSection />
        <DoctorsSection />
        <ServicesGridSection />
        <TestimonialsSection />
        <Sponsors />
        <BookingSection />
      </div>
    </div>
  );
}
