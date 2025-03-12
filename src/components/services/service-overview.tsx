import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
// import { Service } from "@/types/service";

interface ServicesOverviewProps {
  services: {
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
    sidebarIcon?: string;
  }[];
}

const ServicesOverview: React.FC<ServicesOverviewProps> = ({ services }) => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover our comprehensive range of Ayurvedic treatments and therapies
          designed to promote holistic wellness.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service: any, index: any) => (
          <motion.div
            key={service.route}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {service.content.benefits
                    .slice(0, 3)
                    .map((benefit: any, idx: any) => (
                      <li key={idx} className="line-clamp-1">
                        {benefit}
                      </li>
                    ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link
                    to={`/services/${service.route}`}
                    className="flex items-center justify-center"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesOverview;
