import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import serviceJson from "@/assets/service.json";
import { ImageWithSkeleton } from "@/components/image-with-skeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ServicesOverview from "./service-overview";
import { navItems, NavItem } from "./ServiceSideBar";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

interface Service {
  title: string;
  route: string;
  description: string;
  content: {
    overview: string;
    benefits: string[];
    procedure: string;
    duration: string;
    idealFor: string[];
    image: string;
  };
  sidebarIcon?: string | undefined;
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const ServicePageComponent = () => {
  const { serviceId, subServiceId, serviceId_l3 } = useParams<{
    serviceId?: string;
    subServiceId?: string;
    serviceId_l3?: string;
  }>();


  // Function to find a matching navItem based on route
  const findNavItem = (items: NavItem[], route?: string): NavItem | null => {
    if (!route) return null;
    for (const item of items) {
      if (item.route === route) return item;
      if (item.subs) {
        const found = findNavItem(item.subs, route);
        if (found) return found;
      }
    }
    return null;
  };

  // Prioritize serviceId_l3 > subServiceId > serviceId
  let activeRoute: string | undefined =
    serviceId_l3 || subServiceId || serviceId;
  const activeNavItem: NavItem | null = findNavItem(navItems, activeRoute);

  const service = serviceJson.find((s) => s.route === activeRoute);
  console.log(service);

  console.log(activeRoute);


  // Extract relevant routes from the active navItem
  const relevantRoutes = new Set<string>();
  if (activeNavItem) {
    // relevantRoutes.add(activeNavItem.route);
    if (activeNavItem.subs) {
      activeNavItem.subs.forEach((sub) => relevantRoutes.add(sub.route));
    }
  }

  console.log(relevantRoutes);


  // Filter the serviceData based on relevant routes
  const filteredServices: Service[] = serviceJson.filter((s: Service) =>
    relevantRoutes.has(s.route)
  );

  console.log(filteredServices);
  if (!service)
    return (
      <div className="flex items-center justify-center py-20">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Service Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground">
              The service you're looking for doesn't exist or may have been
              moved.
            </p>
          </CardContent>
        </Card>
      </div>
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-6xl mx-auto"
    >
      {filteredServices && <ServicesOverview services={filteredServices} />}

      {/* Header Section */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 my-12"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground mb-6 font-serif">
            {service.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {service.description}
          </p>
          <Button size="lg" className="mt-4">
            Book Consultation
          </Button>
        </div>
        {service.content.image && (
          <ImageWithSkeleton
            src={service.content.image || "/placeholder.svg"}
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
          className="p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
            <span className="w-4 h-4 bg-primary rounded-full mr-2"></span>
            Overview
          </h2>
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
            {service.content.overview}
          </p>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          variants={itemVariants}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-background opacity-50 -rotate-1 transform scale-105"></div>
          <div className="relative p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Key Benefits
            </h2>
            <motion.ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.content.benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-start space-x-2 p-4 bg-card rounded-lg shadow-xs hover:shadow-sm transition-shadow"
                  whileHover={{ scale: 1.02 }}
                >
                  <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.section>

        {/* Procedure Section */}
        <motion.section
          variants={itemVariants}
          className="bg-gradient-to-br from-primary/10 to-background p-8 rounded-xl"
        >
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Treatment Procedure
          </h2>
          <div className="space-y-4">
            {service.content.procedure.split("\n").map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3 pl-4 border-l-4 border-primary"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <span className="text-primary font-bold">{index + 1}.</span>
                <p className="text-muted-foreground">{step}</p>
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
              className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Session Duration
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-3xl text-primary">⏳</span>
                <p className="text-muted-foreground text-xl font-medium">
                  {service.content.duration}
                </p>
              </div>
            </motion.div>
          )}

          {/* Ideal For Card */}
          {service.content.idealFor && (
            <motion.div
              variants={itemVariants}
              className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Ideal For
              </h3>
              <ul className="space-y-2">
                {service.content.idealFor.map((condition, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-2 text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full shrink-0"></span>
                    <span>{condition}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
