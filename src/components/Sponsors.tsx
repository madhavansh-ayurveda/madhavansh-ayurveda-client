import { motion } from "framer-motion";

const sponsors = [
  { id: 1, name: "Brand A", logo: "/sponsors/logo1.svg" },
  { id: 2, name: "Brand B", logo: "/sponsors/logo2.svg" },
  { id: 3, name: "Brand C", logo: "/sponsors/logo3.svg" },
  { id: 4, name: "Brand D", logo: "/sponsors/logo4.svg" },
  { id: 5, name: "Brand E", logo: "/sponsors/logo5.svg" },
  { id: 6, name: "Brand F", logo: "/sponsors/logo6.svg" },
];

const Marquee = () => {
  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <div key={index} className="flex-shrink-0 w-48 mx-8 flex items-center justify-center">
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="h-12 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Sponsors = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-center text-lg font-semibold text-foreground/60 mb-8">
          Trusted by leading wellness and health brands
        </h3>
        <Marquee />
      </div>
    </section>
  );
};

export default Sponsors;