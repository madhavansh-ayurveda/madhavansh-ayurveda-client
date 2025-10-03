"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
} from "@/components/framer-animations"

const therapies = [
    { name: "Abhyanga", desc: "Full-body oil massage for detoxification and rejuvenation" },
    { name: "Nadi Sweda", desc: "Localized steam therapy with herbal decoctions" },
    { name: "Patra Pinda Sweda", desc: "Leaf bundle massage therapy" },
    { name: "Shalishashtika Pinda Sweda", desc: "Navara rice bolus therapy" },
    { name: "Snehana", desc: "Oleation therapy using medicated oils/ghee" },
    { name: "Swedana", desc: "Herbal steam therapy for toxin elimination" },
    { name: "Talam", desc: "Cranial herbal pack therapy" },
    { name: "Udvartana", desc: "Herbal powder massage for weight management" },
];

const slugify = (text: string) =>
    text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w\-]+/g, "") // Remove all non-word chars
        .replace(/\-\-+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, "") // Trim - from end of text

export default function TherapiesSection() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="text-center mb-16">
                        <Badge variant="secondary" className="mb-4">
                            Traditional Therapies
                        </Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Authentic Ayurvedic Treatments</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                            Experience time-tested therapeutic techniques passed down through generations of Ayurvedic
                            practitioners.
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {therapies.map((therapy, index) => (
                        <StaggerItem key={index}>
                            <a href={`/services/${slugify(therapy.name)}`}>
                                <ScaleOnHover scale={1.05}>
                                    <Card className="text-center hover:shadow-md transition-all duration-300 h-full">
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-lg">{therapy.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">{therapy.desc}</p>
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