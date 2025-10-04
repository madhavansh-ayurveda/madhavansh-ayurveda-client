"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
} from "@/components/framer-animations"
import {
  Calendar,
  Users,
  Award,
  BookOpen,
  Phone,
} from "lucide-react"
import { motion } from "framer-motion"
import { Doctor } from "@/types"
import { Link } from "react-router-dom"

interface DoctorCardProps {
    doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
    return (
        <ScaleOnHover scale={1.02}>
            <Card className="group hover:shadow-xl transition-all duration-500 border-border hover:border-accent/30 overflow h-full bg-background">
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
                            src={doctor.profileImage || "/placeholder.svg"}
                            alt={doctor.name}
                            className="w-full h-64 object-cover rounded-xl object-top"
                        />
                    </motion.div>

                    <CardHeader className="pb-2">
                        <CardTitle className="text-xl group-hover:text-accent transition-colors">
                            {doctor.name}
                        </CardTitle>
                        <CardDescription className="text-accent font-medium h-10">
                            {doctor.specialization.join(', ')}
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 gap-4 text-sm">
                            <StaggerItem>
                                <div className="flex items-center gap-2">
                                    <Award className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-muted-foreground">{doctor.experience}+ Years</span>
                                </div>
                            </StaggerItem>
                            <StaggerItem>
                                <div className="flex items-center gap-2">
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-muted-foreground">{doctor.department.join(', ')}</span>
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
                            <p className="text-sm text-muted-foreground h-10">{doctor.qualification}</p>
                        </motion.div>

                        <motion.div
                            className="flex gap-2 pt-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <ScaleOnHover>
                                <Link to={`/book-consultation?doctor=${doctor._id}`}>
                                    <Button
                                        size="sm"
                                        className="flex-1 bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                                    >
                                        <Calendar className="mr-1 h-3 w-3" />
                                        Book Now
                                    </Button>
                                </Link>
                            </ScaleOnHover>
                            <ScaleOnHover>
                                <a href={`tel:${doctor.phone}`}>
                                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                                        <Phone className="mr-1 h-3 w-3" />
                                        Call
                                    </Button>
                                </a>
                            </ScaleOnHover>
                        </motion.div>
                    </CardContent>
                </motion.div>
            </Card>
        </ScaleOnHover>
    )
}