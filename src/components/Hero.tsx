"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";

const products = [
  {
    title: "Panchakarma",
    link: "/services/panchakarma",
    thumbnail: "https://images.unsplash.com/photo-1598685392785-c40430b83a18?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Shirodhara",
    link: "/services/shirodhara",
    thumbnail: "https://images.unsplash.com/photo-1600334022496-837c4b7de3a4?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Abhyanga Massage",
    link: "/services/abhyanga",
    thumbnail: "https://images.unsplash.com/photo-1519824145371-296894a0d72b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Herbal Steam (Swedana)",
    link: "/services/swedana",
    thumbnail: "https://images.unsplash.com/photo-1581888946354-060a755d59a0?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "AI Diet Plans",
    link: "/treatments/lifestyle",
    thumbnail: "https://images.unsplash.com/photo-1540420773420-2850a43d215f?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Kati Basti",
    link: "/services/kati-basti",
    thumbnail: "https://images.unsplash.com/photo-1620732933012-52a54a19c25a?q=80&w=1932&auto=format&fit=crop",
  },
  {
    title: "Nasya Therapy",
    link: "/services/nasya",
    thumbnail: "https://images.unsplash.com/photo-1605299553903-8c4726695b4a?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Udvartana",
    link: "/services/udvartana",
    thumbnail: "https://images.unsplash.com/photo-1562003404-263501b9594f?q=80&w=1965&auto=format&fit=crop",
  },
  {
    title: "Skin & Hair Care",
    link: "/treatments/skin-and-hair",
    thumbnail: "https://images.unsplash.com/photo-1598452939102-3c6ae88c342b?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Yoga & Meditation",
    link: "/treatments/lifestyle",
    thumbnail: "https://images.unsplash.com/photo-1506126613408-4e052e435015?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Pain Management",
    link: "/treatments/arthritis-and-pain",
    thumbnail: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1926&auto=format&fit=crop",
  },
  {
    title: "Detox Programs",
    link: "/services/panchakarma",
    thumbnail: "https://images.unsplash.com/photo-1540420773420-2850a43d215f?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Immunity Boosters",
    link: "/treatments/immunity",
    thumbnail: "https://images.unsplash.com/photo-1596362247143-5020353d04e3?q=80&w=1932&auto=format&fit=crop",
  },
  {
    title: "Stress Relief",
    link: "/services/shirodhara",
    thumbnail: "https://images.unsplash.com/photo-1597854772515-34176254558a?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Consultation",
    link: "/book-consultation",
    thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
  },
];


export default function Hero() {
  return <HeroParallax products={products} />;
}