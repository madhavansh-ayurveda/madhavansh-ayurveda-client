"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
} from "@/components/framer-animations"
import servicesData from "@/assets/service.json";

const services = servicesData.slice(0, 8);

export default function ServicesGridSection() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="text-center mb-16">
                        <Badge variant="secondary" className="mb-4">
                            Traditional Therapies
                        </Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Comprehensive Ayurvedic Care</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                            Explore our wide range of individual therapies, each designed to restore balance and promote well-being.
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <StaggerItem key={index}>
                            <a href={`/services/${service.route}`}>
                                <ScaleOnHover scale={1.05}>
                                    <Card className="text-center hover:shadow-md transition-all duration-300 h-full">
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-lg">{service.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">{service.description}</p>
                                        </CardContent>
                                    </Card>
                                </ScaleOnHover>
                            </a>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    )
}