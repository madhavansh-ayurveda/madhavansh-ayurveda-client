"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Service {
  title: string
  route: string
  description: string
  content: {
    overview: string
    benefits: string[]
    procedure: string
    duration: string
    idealFor: string[]
    image: string
  }
  sidebarIcon?: string
}

interface ServicesOverviewProps {
  services: Service[]
  title?: string
  description?: string
}

export default function ServicesOverview({
  services,
  title = "Our Services",
  description = "Discover our comprehensive range of Ayurvedic treatments and therapies designed to promote holistic wellness.",
}: ServicesOverviewProps) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.route}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {service.sidebarIcon && <span>{service.sidebarIcon}</span>}
                  {service.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {service.content.benefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx} className="line-clamp-1">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link to={`/services/${service.route}`} className="flex items-center justify-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

