"use client"

import HeroSection from "@/components/home/HeroSection"
import ServicesSection from "@/components/home/ServicesSection"
import DoctorsSection from "@/components/home/DoctorsSection"
import TherapiesSection from "@/components/home/TherapiesSection"
import TestimonialsSection from "@/components/home/TestimonialsSection"
import BookingSection from "@/components/home/BookingSection"
import Sponsors from "@/components/Sponsors"

export default function AyurvedicClinicLanding() {
  return (
    <div className="min-h-screen" style={{ backgroundImage: "url('/home-background.jpg')", backgroundRepeat: "repeat", backgroundSize: 'cover' }}>
      <HeroSection />
      <ServicesSection />
      <DoctorsSection />
      <TherapiesSection />
      <TestimonialsSection />
      <Sponsors />
      <BookingSection />
    </div>
  )
}