"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
  SlideIn,
} from "@/components/framer-animations"
import {
  Calendar,
  Users,
  Star,
  Award,
  BookOpen,
  Phone,
} from "lucide-react"
import { motion } from "framer-motion"

const doctors = [
    {
        name: "Dr. Priya Sharma",
        specialization: "Panchakarma & Detoxification",
        experience: "15+ Years",
        education: "BAMS, MD (Ayurveda)",
        expertise: ["Skin & Hair Treatments", "Immunity Boosting", "Stress Management"],
        image: "/indian-female-ayurvedic-doctor-in-traditional-whit.jpg",
        rating: 4.9,
        consultations: "2000+",
    },
    {
        name: "Dr. Rajesh Kumar",
        specialization: "Pain Management & Arthritis",
        experience: "20+ Years",
        education: "BAMS, PhD (Ayurveda)",
        expertise: ["Arthritis Treatment", "Joint Pain Relief", "Herbal Medicine"],
        image: "/indian-male-ayurvedic-doctor-with-beard-in-white-c.jpg",
        rating: 4.8,
        consultations: "3500+",
    },
    {
        name: "Dr. Meera Patel",
        specialization: "Women's Health & Fertility",
        experience: "12+ Years",
        education: "BAMS, MS (Ayurveda Gynecology)",
        expertise: ["PCOD Treatment", "Fertility Enhancement", "Hormonal Balance"],
        image: "/indian-female-ayurvedic-doctor-smiling-in-traditio.jpg",
        rating: 4.9,
        consultations: "1800+",
    },
    {
        name: "Dr. Arjun Singh",
        specialization: "Lifestyle Disorders & Metabolism",
        experience: "18+ Years",
        education: "BAMS, MD (Kayachikitsa)",
        expertise: ["Diabetes Management", "Weight Loss", "Digestive Health"],
        image: "/indian-male-ayurvedic-doctor-with-glasses-in-white.jpg",
        rating: 4.7,
        consultations: "2800+",
    },
    {
        name: "Dr. Kavya Reddy",
        specialization: "Eye Care & Netra Chikitsa",
        experience: "10+ Years",
        education: "BAMS, Specialized in Shalakya Tantra",
        expertise: ["Glaucoma Treatment", "Eye Pressure Management", "Vision Care"],
        image: "/indian-female-ayurvedic-doctor-with-stethoscope.jpg",
        rating: 4.8,
        consultations: "1200+",
    },
];

export default function DoctorsSection() {
    return (
        <section id="doctors" className="py-20">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="text-center mb-16">
                        <Badge variant="secondary" className="mb-4">
                            Meet Our Experts
                        </Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Experienced Ayurvedic Practitioners</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                            Our team of certified Ayurvedic doctors brings decades of experience in traditional healing practices
                            and modern wellness approaches.
                        </p>
                    </div>
                </FadeIn>

                <SlideIn direction="bottom" delay={0.2}>
                    <div className="relative max-w-6xl mx-auto">
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-2 md:-ml-4">
                                {doctors.map((doctor, index) => (
                                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                        <ScaleOnHover scale={1.02}>
                                            <Card className="group hover:shadow-xl transition-all duration-500 border-border hover:border-primary/30 overflow h-full bg-background">
                                                <motion.div
                                                    className="relative overflow"
                                                    whileHover={{
                                                        scale: 1.03,
                                                        transition: { type: "spring", stiffness: 300, damping: 10 },
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <motion.div
                                                        className="relative overflow rounded"
                                                        whileHover={{ scale: 1.05 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <img
                                                            src={doctor.image || "/placeholder.svg"}
                                                            alt={doctor.name}
                                                            className="w-full h-64 object-cover rounded-xl"
                                                        />
                                                        <motion.div
                                                            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1"
                                                            initial={{ scale: 0 }}
                                                            whileInView={{ scale: 1 }}
                                                            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                                                        >
                                                            <Star className="h-3 w-3 fill-primary text-primary" />
                                                            <span className="text-xs font-medium">{doctor.rating}</span>
                                                        </motion.div>
                                                    </motion.div>

                                                    <CardHeader className="pb-2">
                                                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                                            {doctor.name}
                                                        </CardTitle>
                                                        <CardDescription className="text-primary font-medium">
                                                            {doctor.specialization}
                                                        </CardDescription>
                                                    </CardHeader>

                                                    <CardContent className="space-y-4">
                                                        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 gap-4 text-sm">
                                                            <StaggerItem>
                                                                <div className="flex items-center gap-2">
                                                                    <Award className="h-4 w-4 text-muted-foreground" />
                                                                    <span className="text-muted-foreground">{doctor.experience}</span>
                                                                </div>
                                                            </StaggerItem>
                                                            <StaggerItem>
                                                                <div className="flex items-center gap-2">
                                                                    <Users className="h-4 w-4 text-muted-foreground" />
                                                                    <span className="text-muted-foreground">{doctor.consultations}</span>
                                                                </div>
                                                            </StaggerItem>
                                                        </StaggerContainer>

                                                        <motion.div
                                                            initial={{ opacity: 0, y: 20 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.2 }}
                                                        >
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <BookOpen className="h-4 w-4 text-muted-foreground" />
                                                                <span className="text-sm font-medium">Education</span>
                                                            </div>
                                                            <p className="text-sm text-muted-foreground">{doctor.education}</p>
                                                        </motion.div>

                                                        <div>
                                                            <h4 className="text-sm font-medium mb-2">Expertise</h4>
                                                            <StaggerContainer staggerDelay={0.05} className="flex flex-wrap gap-1">
                                                                {doctor.expertise.map((skill, skillIndex) => (
                                                                    <StaggerItem key={skillIndex}>
                                                                        <Badge variant="secondary" className="text-xs">
                                                                            {skill}
                                                                        </Badge>
                                                                    </StaggerItem>
                                                                ))}
                                                            </StaggerContainer>
                                                        </div>

                                                        <motion.div
                                                            className="flex gap-2 pt-2"
                                                            initial={{ opacity: 0, y: 20 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.4 }}
                                                        >
                                                            <ScaleOnHover>
                                                                <a href="/#contact">
                                                                    <Button
                                                                        size="sm"
                                                                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                                                                    >
                                                                        <Calendar className="mr-1 h-3 w-3" />
                                                                        Book Now
                                                                    </Button>
                                                                </a>
                                                            </ScaleOnHover>
                                                            <ScaleOnHover>
                                                                <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                                                                    <Phone className="mr-1 h-3 w-3" />
                                                                    Call
                                                                </Button>
                                                            </ScaleOnHover>
                                                        </motion.div>
                                                    </CardContent>
                                                </motion.div>
                                            </Card>
                                        </ScaleOnHover>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="hidden md:flex -left-12 bg-primary/10 border-primary/20 hover:bg-primary hover:text-primary-foreground" />
                            <CarouselNext className="hidden md:flex -right-12 bg-primary/10 border-primary/20 hover:bg-primary hover:text-primary-foreground" />
                        </Carousel>
                    </div>
                </SlideIn>

                <FadeIn delay={0.4}>
                    <div className="text-center mt-12">
                        <ScaleOnHover>
                            <a href="/doctors">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="hover:bg-primary hover:text-primary-foreground bg-transparent"
                                >
                                    View All Doctors
                                </Button>
                            </a>
                        </ScaleOnHover>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}