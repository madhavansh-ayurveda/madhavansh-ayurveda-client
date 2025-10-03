"use client"

import HeroSection from "@/components/home/HeroSection"
import TreatmentsSection from "@/components/home/TreatmentsSection"
import DoctorsSection from "@/components/home/DoctorsSection"
import ServicesGridSection from "@/components/home/ServicesGridSection"
import TestimonialsSection from "@/components/home/TestimonialsSection"
import BookingSection from "@/components/home/BookingSection"
import Sponsors from "@/components/Sponsors"

export default function AyurvedicClinicLanding() {
  return (
    <div className="min-h-screen" style={{ backgroundImage: "url('/home-background.jpg')", backgroundRepeat: "repeat", backgroundSize: 'cover' }}>
      <HeroSection />
      <TreatmentsSection />
      <DoctorsSection />
      <ServicesGridSection />
      <TestimonialsSection />
      <Sponsors />
      <BookingSection />
    </div>
  )
}