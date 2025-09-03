"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function Hero() {
  return (
    <HeroParallax
      title="The Future of Ayurvedic Wellness"
      subtitle="Experience personalized healing that blends ancient wisdom with modern technology. Your journey to balance starts here."
      products={products}
    />
  );
}
const products = [
  {
    title: "Panchakarma",
    link: "/services/panchakarma",
    thumbnail:
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Abhyanga",
    link: "/services/abhyanga",
    thumbnail:
      "https://images.unsplash.com/photo-1582794251342-a03b1a74e5b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Shirodhara",
    link: "/services/shirodhara",
    thumbnail:
      "https://images.unsplash.com/photo-1544161515-cfd826dbaa0b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Herbal Steam",
    link: "/services/swedana",
    thumbnail:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Nasya",
    link: "/services/nasya",
    thumbnail:
      "https://images.unsplash.com/photo-1600334023987-15e40a2435f8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Kati Basti",
    link: "/services/kati-basti",
    thumbnail:
      "https://images.unsplash.com/photo-1573453850838-552dbaa7a35a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Pizhichil",
    link: "/services/pizhichil",
    thumbnail:
      "https://images.unsplash.com/photo-1604537449725-b13a4a8a1b8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Udvartana",
    link: "/services/udvartana",
    thumbnail:
      "https://images.unsplash.com/photo-1512290923902-8a9f31a83653?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Netra Tarpana",
    link: "/services/netra-tarpana",
    thumbnail:
      "https://images.unsplash.com/photo-1599231332055-781a74a70155?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Yoga & Meditation",
    link: "/services/yoga",
    thumbnail:
      "https://images.unsplash.com/photo-1506126613408-4e0596027091?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Diet Counseling",
    link: "/services/diet-counseling",
    thumbnail:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Herbal Medicine",
    link: "/services/herbal-medicine",
    thumbnail:
      "https://images.unsplash.com/photo-1587825045495-9540351289a9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Stress Management",
    link: "/services/stress-management",
    thumbnail:
      "https://images.unsplash.com/photo-1598343325713-54a1a145bf2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Skin Care",
    link: "/services/skin-care",
    thumbnail:
      "https://images.unsplash.com/photo-1556228852-6d45a7ae2673?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Detox Programs",
    link: "/services/detox",
    thumbnail:
      "https://images.unsplash.com/photo-1544195629-5f769b061a85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];