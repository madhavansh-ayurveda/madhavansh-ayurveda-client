"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
    FadeIn,
    StaggerContainer,
    StaggerItem,
    ScaleOnHover,
    SlideIn,
} from "@/components/framer-animations"
import {
    Calendar,
    Clock,
    Leaf,
    Heart,
} from "lucide-react"
import { motion } from "framer-motion"

export default function BookingSection() {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <Badge variant="secondary" className="mb-4">
                                Book Your Consultation
                            </Badge>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Start Your Healing Journey Today</h2>
                            <p className="text-lg text-muted-foreground text-pretty">
                                Schedule a consultation with our experienced Ayurvedic doctors and receive personalized treatment
                                plans.
                            </p>
                        </div>
                    </FadeIn>

                    <div className=" lg:grid-cols-2 gap-12 items-start">
                        <SlideIn direction="left" delay={0.2}>
                            <div className="space-y-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Why Choose Our Clinic?</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <StaggerContainer staggerDelay={0.1}>
                                            {[
                                                {
                                                    icon: Clock,
                                                    title: "Experienced Practitioners",
                                                    desc: "Over 20 years of combined experience in traditional Ayurveda",
                                                },
                                                {
                                                    icon: Leaf,
                                                    title: "Natural Remedies",
                                                    desc: "Custom-formulated herbal medicines using pure ingredients",
                                                },
                                                {
                                                    icon: Heart,
                                                    title: "Holistic Approach",
                                                    desc: "Treating the root cause, not just symptoms",
                                                },
                                            ].map((item, index) => (
                                                <StaggerItem key={index}>
                                                    <div className="flex items-start gap-3">
                                                        <motion.div
                                                            className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                                            whileHover={{ rotate: 360 }}
                                                            transition={{ duration: 0.5 }}
                                                        >
                                                            <item.icon className="h-3 w-3 text-accent" />
                                                        </motion.div>
                                                        <div>
                                                            <h4 className="font-medium">{item.title}</h4>
                                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                </StaggerItem>
                                            ))}
                                        </StaggerContainer>
                                    </CardContent>
                                </Card>
                            </div>
                        </SlideIn>

                        <SlideIn direction="right" delay={0.4} className="mt-8 my-auto">
                            {/* <Card>
                                <CardHeader>
                                    <CardTitle>Book Your Consultation</CardTitle>
                                    <CardDescription>
                                        Fill out the form below and we'll contact you to schedule your appointment.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <StaggerContainer staggerDelay={0.1}>
                                        <StaggerItem>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="text-sm font-medium mb-2 block">First Name</label>
                                                    <Input placeholder="Enter your first name" />
                                                </div>
                                                <div>
                                                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                                                    <Input placeholder="Enter your last name" />
                                                </div>
                                            </div>
                                        </StaggerItem>
                                        <StaggerItem>
                                            <div>
                                                <label className="text-sm font-medium mb-2 block">Email</label>
                                                <Input type="email" placeholder="Enter your email" />
                                            </div>
                                        </StaggerItem>
                                        <StaggerItem>
                                            <div>
                                                <label className="text-sm font-medium mb-2 block">Phone Number</label>
                                                <Input type="tel" placeholder="Enter your phone number" />
                                            </div>
                                        </StaggerItem>
                                        <StaggerItem>
                                            <div>
                                                <label className="text-sm font-medium mb-2 block">Health Concern</label>
                                                <Textarea placeholder="Briefly describe your health concern or condition" rows={3} />
                                            </div>
                                        </StaggerItem>
                                        <StaggerItem>
                                            <ScaleOnHover>
                                                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                                                    <Calendar className="mr-2 h-4 w-4" />
                                                    Schedule Consultation
                                                </Button>
                                            </ScaleOnHover>
                                        </StaggerItem>
                                        <StaggerItem>
                                            <p className="text-xs text-muted-foreground text-center">
                                                We'll contact you within 24 hours to confirm your appointment.
                                            </p>
                                        </StaggerItem>
                                    </StaggerContainer>
                                </CardContent>
                            </Card> */}
                            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Book Consulation</Button>
                        </SlideIn>
                    </div>
                </div>
            </div>
        </section>
    )
}