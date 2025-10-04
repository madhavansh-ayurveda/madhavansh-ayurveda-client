"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/framer-animations"
import {
  Leaf,
  Heart,
  Shield,
  Eye,
  Users,
  CheckCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react"
import { motion } from "framer-motion"
import treatmentsData from "@/assets/treatment.json";

const iconMap: { [key: string]: React.ElementType } = {
  "Skin and Hair": Leaf,
  "Infertility and PCOD": Heart,
  "Kidney and Gallbladder Stone": Shield,
  "Arthritis and Pain Management": Heart,
  "Life style disorder": Users,
  "Glaucoma": Eye,
  "Immunity booster dose": Shield,
};

const colorMap: { [key: string]: string } = {
    "Skin and Hair": "from-emerald-500/10 to-green-500/5",
    "Arthritis and Pain Management": "from-red-500/10 to-pink-500/5",
    "Immunity booster dose": "from-blue-500/10 to-cyan-500/5",
    "Infertility and PCOD": "from-purple-500/10 to-violet-500/5",
    "Life style disorder": "from-orange-500/10 to-amber-500/5",
    "Kidney and Gallbladder Stone": "from-teal-500/10 to-emerald-500/5",
    "Glaucoma": "from-indigo-500/10 to-blue-500/5",
};

const treatments = treatmentsData.map(treatment => ({
    ...treatment,
    icon: iconMap[treatment.title] || Shield,
    color: colorMap[treatment.title] || "from-gray-500/10 to-gray-500/5",
    details: [
        "Personalized consultation",
        "Custom herbal formulations",
        "Therapeutic procedures",
        "Diet & lifestyle guidance",
    ],
}));

export default function TreatmentsSection() {
    return (
        <section id="treatments" className="py-24">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Badge variant="secondary" className="mb-6 text-base px-4 py-2">
                                <Sparkles className="mr-2 h-4 w-4" />
                                Our Specializations
                            </Badge>
                        </motion.div>
                        <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">Authentic Ayurvedic Treatments</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                            We offer specialized care for a wide range of health concerns, focusing on holistic and natural healing methods.
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {treatments.map((treatment, index) => (
                        <StaggerItem key={index}>
                            <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.4, ease: [0.25, 0.25, 0, 1] }}>
                                <Card
                                    className={`premium-card group border-0 shadow-lg hover:shadow-2xl bg-gradient-to-br ${treatment.color} backdrop-blur-sm h-full`}
                                >
                                    <CardHeader className="pb-4">
                                        <motion.div
                                            className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300"
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.8 }}
                                        >
                                            <treatment.icon className="h-8 w-8 text-accent" />
                                        </motion.div>
                                        <CardTitle className="text-2xl group-hover:text-accent transition-colors duration-300">
                                            {treatment.title}
                                        </CardTitle>
                                        <CardDescription className="text-base leading-relaxed">{treatment.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6 py-2">
                                        <ul className="space-y-3">
                                            {treatment.details.map((detail, detailIndex) => (
                                                <motion.li
                                                    key={detailIndex}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: detailIndex * 0.1 }}
                                                    viewport={{ once: true }}
                                                    className="flex items-start gap-3 text-sm text-muted-foreground"
                                                >
                                                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                                                    <span>{detail}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                        <a href={`/treatments${treatment.href}`}>
                                            <Button
                                                variant="outline"
                                                className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                                            >
                                                Learn More
                                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                            </Button>
                                        </a>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    )
}