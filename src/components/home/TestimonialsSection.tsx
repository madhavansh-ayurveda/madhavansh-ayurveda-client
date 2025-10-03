"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
} from "@/components/framer-animations"
import { Star } from "lucide-react"

const testimonials = [
    {
        name: "Priya Sharma",
        condition: "Chronic Arthritis",
        testimonial:
            "After 6 months of Ayurvedic treatment, my joint pain has reduced by 80%. The herbal remedies and Patra Pinda Sweda therapy worked wonders.",
        rating: 5,
    },
    {
        name: "Rajesh Kumar",
        condition: "Kidney Stones",
        testimonial:
            "The custom herbal formulations helped dissolve my kidney stones naturally without surgery. I'm grateful for this holistic approach to healing.",
        rating: 5,
    },
    {
        name: "Meera Patel",
        condition: "PCOD",
        testimonial:
            "The specialized treatments for PCOD have regulated my cycles and improved my overall health. The doctors here truly understand women's health.",
        rating: 5,
    },
];

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-20">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="text-center mb-16">
                        <Badge variant="secondary" className="mb-4">
                            Patient Stories
                        </Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Healing Success Stories</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                            Read about the transformative experiences of our patients who found healing through Ayurvedic
                            treatments.
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer staggerDelay={0.2} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <StaggerItem key={index}>
                            <ScaleOnHover scale={1.03}>
                                <Card className="hover:shadow-lg transition-all duration-300 h-full">
                                    <CardHeader>
                                        <StaggerContainer staggerDelay={0.1} className="flex items-center gap-1 mb-2">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <StaggerItem key={i}>
                                                    <Star className="h-4 w-4 fill-primary text-primary" />
                                                </StaggerItem>
                                            ))}
                                        </StaggerContainer>
                                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                                        <CardDescription className="text-primary font-medium">{testimonial.condition}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground italic">"{testimonial.testimonial}"</p>
                                    </CardContent>
                                </Card>
                            </ScaleOnHover>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    )
}