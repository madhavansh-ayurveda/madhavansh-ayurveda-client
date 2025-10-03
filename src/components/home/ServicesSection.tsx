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

const services = [
    {
        icon: Leaf,
        title: "Skin & Hair Wellness",
        href: "/treatments/skin&hair",
        description: "Restore natural radiance with traditional Ayurvedic cleansing and nourishing treatments.",
        treatments: [
            "Abhyanga - Therapeutic oil massage",
            "Shirah Lepa - Herbal scalp therapy",
            "Udvartana - Detoxifying body scrub",
            "Custom herbal formulations",
        ],
        color: "from-emerald-500/10 to-green-500/5",
    },
    {
        icon: Heart,
        title: "Pain & Arthritis Relief",
        href: "/treatments/arthritis&pain",
        description: "Natural pain management through time-tested herbal remedies and therapeutic techniques.",
        treatments: [
            "Patra Pinda Sweda - Medicinal leaf therapy",
            "Churna Pinda Sweda - Herbal bolus treatment",
            "Anti-inflammatory compounds",
            "Personalized pain protocols",
        ],
        color: "from-red-500/10 to-pink-500/5",
    },
    {
        icon: Shield,
        title: "Immunity Enhancement",
        href: "/treatments/immunity",
        description: "Strengthen your body's natural defenses with powerful Rasayana therapies and herbs.",
        treatments: [
            "Rasayana rejuvenation therapy",
            "Immune-boosting formulations",
            "Panchakarma detoxification",
            "Lifestyle optimization",
        ],
        color: "from-blue-500/10 to-cyan-500/5",
    },
    {
        icon: Heart,
        title: "Women's Reproductive Health",
        href: "/treatments/infertility&pCOD",
        description:
            "Specialized care for fertility, PCOD, and hormonal balance through gentle Ayurvedic methods.",
        treatments: [
            "Fertility enhancement protocols",
            "PCOD management programs",
            "Hormonal balance therapy",
            "Specialized massage techniques",
        ],
        color: "from-purple-500/10 to-violet-500/5",
    },
    {
        icon: Users,
        title: "Lifestyle Disorder Management",
        href: "/treatments/lifestyle",
        description:
            "Address modern health challenges with holistic Ayurvedic approaches and lifestyle modifications.",
        treatments: [
            "Diabetes management",
            "Stress & anxiety relief",
            "Weight optimization",
            "Sleep disorder treatment",
        ],
        color: "from-orange-500/10 to-amber-500/5",
    },
    {
        icon: Shield,
        title: "Kidney & Gallbladder Care",
        href: "/treatments/kidney&gallbladder",
        description: "Natural stone management and prevention through specialized herbal formulations.",
        treatments: [
            "Stone dissolution therapy",
            "Preventive formulations",
            "Detox protocols",
            "Dietary guidance",
        ],
        color: "from-teal-500/10 to-emerald-500/5",
    },
    {
        icon: Eye,
        title: "Eye Health & Vision Care",
        href: "/treatments/glucoma",
        description: "Preserve and enhance vision through traditional Netra Chikitsa and herbal treatments.",
        treatments: [
            "Glaucoma management",
            "Vision preservation",
            "Netra Tarpana therapy",
            "Preventive eye care",
        ],
        color: "from-indigo-500/10 to-blue-500/5",
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-24">
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
                    {services.map((service, index) => (
                        <StaggerItem key={index}>
                            <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.4, ease: [0.25, 0.25, 0, 1] }}>
                                <Card
                                    className={`premium-card group border-0 shadow-lg hover:shadow-2xl bg-gradient-to-br ${service.color} backdrop-blur-sm h-full`}
                                >
                                    <CardHeader className="pb-4">
                                        <motion.div
                                            className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.8 }}
                                        >
                                            <service.icon className="h-8 w-8 text-primary" />
                                        </motion.div>
                                        <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                                            {service.title}
                                        </CardTitle>
                                        <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <ul className="space-y-3">
                                            {service.treatments.map((treatment, treatmentIndex) => (
                                                <motion.li
                                                    key={treatmentIndex}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: treatmentIndex * 0.1 }}
                                                    viewport={{ once: true }}
                                                    className="flex items-start gap-3 text-sm text-muted-foreground"
                                                >
                                                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                                    <span>{treatment}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                        <a href={service.href}>
                                            <Button
                                                variant="outline"
                                                className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm"
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