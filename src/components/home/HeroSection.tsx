"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ParallaxSection,
  ScaleOnHover,
  SlideIn,
} from "@/components/framer-animations"
import {
  Calendar,
  Users,
  Star,
  Sparkles,
  ArrowRight,
  Phone,
  CheckCircle,
} from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
    return (
        <section id="home" className="relative lg:py-16 overflow-hidden">
            <ParallaxSection offset={50} className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
                <motion.div
                    className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-20 left-20 w-96 h-96 bg-destructive/5 rounded-full blur-3xl"
                    animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
                    transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
            </ParallaxSection>

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <SlideIn direction="left">
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="flex items-center gap-2"
                            >
                                <Sparkles className="h-5 w-5 text-accent" />
                                <Badge variant="secondary" className="text-sm font-medium">
                                    Authentic Ayurvedic Healing Since 2019
                                </Badge>
                            </motion.div>

                            <motion.h1
                                className="text-5xl lg:text-7xl font-bold text-balance leading-tight"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.25, 0, 1] }}
                            >
                                Heal Naturally with{" "}
                                <span className="text-accent relative">
                                    Ayurveda
                                    <motion.div
                                        className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-destructive rounded-full"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: 1.2, duration: 0.8 }}
                                    />
                                </span>
                            </motion.h1>

                            <FadeIn delay={0.8} duration={1}>
                                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                                    Experience the ancient wisdom of Ayurveda with our expert practitioners. Personalized treatments,
                                    natural remedies, and holistic healing for your complete wellness journey.
                                </p>
                            </FadeIn>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-6"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.8 }}
                            >
                                <ScaleOnHover scale={1.05}>
                                    <a href="/book-consultation">
                                        <Button
                                            size="lg"
                                            className="bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-6"
                                        >
                                            <Calendar className="mr-3 h-5 w-5" />
                                            Book Consultation
                                            <ArrowRight className="ml-3 h-5 w-5" />
                                        </Button>
                                    </a>
                                </ScaleOnHover>
                                <ScaleOnHover scale={1.05}>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-2 border-accent/20 hover:border-accent hover:bg-accent/5 text-lg px-8 py-6 bg-transparent"
                                    >
                                        <Phone className="mr-3 h-5 w-5" />
                                        Call Now
                                    </Button>
                                </ScaleOnHover>
                            </motion.div>

                            <StaggerContainer staggerDelay={0.2} className="flex items-center gap-8 pt-8">
                                <StaggerItem>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                                            <Users className="h-6 w-6 text-accent" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-foreground">2000+</div>
                                            <div className="text-sm text-muted-foreground">Happy Patients</div>
                                        </div>
                                    </div>
                                </StaggerItem>
                                <StaggerItem>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                                            <Star className="h-6 w-6 text-accent fill-accent" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-foreground">4.9/5</div>
                                            <div className="text-sm text-muted-foreground">Patient Rating</div>
                                        </div>
                                    </div>
                                </StaggerItem>
                            </StaggerContainer>
                        </div>
                    </SlideIn>

                    <SlideIn direction="right" delay={0.4}>
                        <ParallaxSection offset={-30}>
                            <motion.div
                                className="relative"
                                whileHover={{
                                    scale: 1.03,
                                    rotateY: 5,
                                    transition: { type: "spring", stiffness: 300, damping: 10 },
                                }}
                            >
                                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-destructive/20 rounded-2xl blur-2xl" />
                                <img
                                    src="/Home_page_dr_priyanka.jpg"
                                    alt="Ayurvedic wellness center"
                                    className="relative rounded-2xl shadow-2xl w-full h-[550px] object-cover"
                                />
                                <motion.div
                                    className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                                    initial={{ scale: 0, rotate: -10 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                                >
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-destructive" />
                                        <span className="text-sm font-medium">Certified Practitioners</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </ParallaxSection>
                    </SlideIn>
                </div>
            </div>
        </section>
    )
}