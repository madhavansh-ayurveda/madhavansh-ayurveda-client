"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";

const products = [
  {
    title: "Panchakarma",
    link: "/services/panchakarma",
    thumbnail: "/services/panchakarma.jpg",
  },
  {
    title: "Shirodhara",
    link: "/services/shirodhara",
    thumbnail: "/services/shirodhara.jpg",
  },
  {
    title: "Abhyanga Massage",
    link: "/services/abhyanga",
    thumbnail: "/services/abhyanga.jpg",
  },
  {
    title: "Herbal Steam (Swedana)",
    link: "/services/swedana",
    thumbnail: "/services/swedana.jpg",
  },
  {
    title: "AI Diet Plans",
    link: "/treatments/lifestyle",
    thumbnail: "/services/diet-plan.jpg",
  },
  {
    title: "Kati Basti",
    link: "/services/kati-basti",
    thumbnail: "/services/kati-basti.jpg",
  },
  {
    title: "Nasya Therapy",
    link: "/services/nasya",
    thumbnail: "/services/nasya.jpg",
  },
  {
    title: "Udvartana",
    link: "/services/udvartana",
    thumbnail: "/services/udvartana.jpg",
  },
  {
    title: "Skin & Hair Care",
    link: "/treatments/skin-and-hair",
    thumbnail: "/services/skin-care.jpg",
  },
  {
    title: "Yoga & Meditation",
    link: "/treatments/lifestyle",
    thumbnail: "/services/yoga.jpg",
  },
  {
    title: "Pain Management",
    link: "/treatments/arthritis-and-pain",
    thumbnail: "/services/pain-management.jpg",
  },
  {
    title: "Detox Programs",
    link: "/services/panchakarma",
    thumbnail: "/services/detox.jpg",
  },
  {
    title: "Immunity Boosters",
    link: "/treatments/immunity",
    thumbnail: "/services/immunity.jpg",
  },
  {
    title: "Stress Relief",
    link: "/services/shirodhara",
    thumbnail: "/services/stress-relief.jpg",
  },
  {
    title: "Consultation",
    link: "/book-consultation",
    thumbnail: "/services/consultation.jpg",
  },
];


export default function Hero() {
  return <HeroParallax products={products} />;
}