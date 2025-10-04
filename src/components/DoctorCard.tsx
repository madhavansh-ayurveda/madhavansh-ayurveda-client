"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
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
            <Card className="group hover:shadow-xl transition-all duration-500 border-border hover:border-accent/30 overflow-hidden h-full bg-background flex flex-col">
                <div className="relative overflow-hidden">
                    <motion.img
                        src={doctor.profileImage || "/placeholder.svg"}
                        alt={doctor.name}
                        className="w-full h-64 object-cover object-top"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>

                <CardHeader className="pb-2">
                    <CardTitle className="text-xl group-hover:text-accent transition-colors truncate">
                        {doctor.name}
                    </CardTitle>
                    <CardDescription className="text-accent font-medium h-6 truncate">
                        {doctor.specialization.join(', ')}
                    </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col justify-between p-4 space-y-4">
                    {/* Top section with badges and education */}
                    <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2">
                                <Award className="h-3.5 w-3.5" />
                                <span className="font-normal">{doctor.experience}+ Years Exp.</span>
                            </Badge>
                            <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2">
                                <Users className="h-3.5 w-3.5" />
                                <span className="font-normal">{doctor.department.join(', ')}</span>
                            </Badge>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <BookOpen className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm font-medium">Education</span>
                            </div>
                            <p className="text-sm text-muted-foreground h-10 line-clamp-2">{doctor.qualification}</p>
                        </div>
                    </div>

                    {/* Bottom section with buttons */}
                    <motion.div
                        className="flex gap-2 pt-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <ScaleOnHover>
                            <Link to={`/book-consultation?doctor=${doctor._id}`} className="w-full">
                                <Button
                                    size="sm"
                                    className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                                >
                                    <Calendar className="mr-1.5 h-3.5 w-3.5" />
                                    Book Now
                                </Button>
                            </Link>
                        </ScaleOnHover>
                        <ScaleOnHover>
                            <a href={`tel:${doctor.phone}`} className="w-full">
                                <Button size="sm" variant="outline" className="w-full bg-transparent">
                                    <Phone className="mr-1.5 h-3.5 w-3.5" />
                                    Call
                                </Button>
                            </a>
                        </ScaleOnHover>
                    </motion.div>
                </CardContent>
            </Card>
        </ScaleOnHover>
    )
}