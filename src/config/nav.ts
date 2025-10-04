import services from "@/assets/service.json";
import treatments from "@/assets/treatment.json";

export const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "/services",
    content: services.slice(0, 14).map(service => ({
      title: service.title,
      href: `/services/${service.route}`,
      description: service.description,
    })),
    viewMore: {
        title: "Many More",
        href: "/services",
        description: "Explore all our available services."
    }
  },
  {
    title: "Treatments",
    href: "/treatments",
    content: treatments.map(treatment => ({
      title: treatment.title,
      href: `/treatments${treatment.href}`,
      description: treatment.description,
    })),
  },
  {
    title: "Doctors",
    href: "/doctors",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Consultations",
    href: "/track_consultation",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];