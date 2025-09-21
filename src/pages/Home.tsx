"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
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
  Clock,
  Star,
  Users,
  Leaf,
  Heart,
  Shield,
  Eye,
  Award,
  BookOpen,
  Phone,
  CheckCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react"
import { motion } from "framer-motion"
// import doctorsData from "@/doctors.json";
import Sponsors from "@/components/Sponsors"

export default function AyurvedicClinicLanding() {
  // const doctors = doctorsData.doctors.map((doctor) => ({
  //   id: doctor.id,
  //   name: doctor.name,
  //   designation: doctor.specialization,
  //   image: doctor.image,
  // }));

  return (
    <div className="min-h-screen bg-white">
      {/* <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
        className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80"
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FloatingElement duration={6}>
              <div className="relative">
                <Leaf className="h-10 w-10 text-primary" />
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            </FloatingElement>
            <div>
              <span className="text-2xl font-bold text-foreground">AyurVeda</span>
              <div className="text-sm text-primary font-medium">Wellness Center</div>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "Services", "Doctors", "Therapies", "Testimonials", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                {item}
                <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <ScaleOnHover scale={1.05}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
                <Calendar className="mr-2 h-4 w-4" />
                Book Now
              </Button>
            </ScaleOnHover>
          </motion.div>
        </div>
      </motion.header> */}

      <section id="home" className="relative lg:py-10 overflow-hidden hero-gradient">
        {/* <ParallaxSection offset={50} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
          <motion.div
            className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </ParallaxSection> */}

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
                  <Sparkles className="h-5 w-5 text-primary" />
                  <Badge variant="secondary" className="text-sm font-medium">
                    Authentic Ayurvedic Healing Since 2010
                  </Badge>
                </motion.div>

                <motion.h1
                  className="text-5xl lg:text-7xl font-bold text-balance leading-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.25, 0, 1] }}
                >
                  Heal Naturally with{" "}
                  <span className="text-primary relative">
                    Ayurveda
                    <motion.div
                      className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full"
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
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-6"
                    >
                      <Calendar className="mr-3 h-5 w-5" />
                      Book Consultation
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                  </ScaleOnHover>
                  <ScaleOnHover scale={1.05}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-primary/20 hover:border-primary hover:bg-primary/5 text-lg px-8 py-6 bg-transparent"
                    >
                      <Phone className="mr-3 h-5 w-5" />
                      Call Now
                    </Button>
                  </ScaleOnHover>
                </motion.div>

                <StaggerContainer staggerDelay={0.2} className="flex items-center gap-8 pt-8">
                  <StaggerItem>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
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
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
                  <img
                    src="/indian-female-ayurvedic-doctor-in-traditional-whit.jpg"
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
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">Certified Practitioners</span>
                    </div>
                  </motion.div>
                </motion.div>
              </ParallaxSection>
            </SlideIn>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 gradient-bg">
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
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">Comprehensive Ayurvedic Care</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                Experience the healing power of traditional Ayurveda with our specialized treatments, custom-formulated
                remedies, and personalized wellness programs.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Skin & Hair Wellness",
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
                description: "Preserve and enhance vision through traditional Netra Chikitsa and herbal treatments.",
                treatments: [
                  "Glaucoma management",
                  "Vision preservation",
                  "Netra Tarpana therapy",
                  "Preventive eye care",
                ],
                color: "from-indigo-500/10 to-blue-500/5",
              },
            ].map((service, index) => (
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
                      <ScaleOnHover scale={1.02}>
                        <Button
                          variant="outline"
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </ScaleOnHover>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Doctors Section with Enhanced Animations */}
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
                  {[
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
                  ].map((doctor, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <ScaleOnHover scale={1.02}>
                        <Card className="group hover:shadow-xl transition-all duration-500 border-border hover:border-primary/30 overflow h-full mt-24 bg-background">
                          <motion.div
                            className="relative overflow"
                            whileHover={{
                              scale: 1.03,
                              // rotateY: 5,
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
                                  <Button
                                    size="sm"
                                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                                  >
                                    <Calendar className="mr-1 h-3 w-3" />
                                    Book Now
                                  </Button>
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
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  View All Doctors
                </Button>
              </ScaleOnHover>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Traditional Therapies Section */}
      <section className="py-20 bg-muted/30">
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
            {[
              { name: "Abhyanga", desc: "Full-body oil massage for detoxification and rejuvenation" },
              { name: "Nadi Sweda", desc: "Localized steam therapy with herbal decoctions" },
              { name: "Patra Pinda Sweda", desc: "Leaf bundle massage therapy" },
              { name: "Shalishashtika Pinda Sweda", desc: "Navara rice bolus therapy" },
              { name: "Snehana", desc: "Oleation therapy using medicated oils/ghee" },
              { name: "Swedana", desc: "Herbal steam therapy for toxin elimination" },
              { name: "Talam", desc: "Cranial herbal pack therapy" },
              { name: "Udvartana", desc: "Herbal powder massage for weight management" },
            ].map((therapy, index) => (
              <StaggerItem key={index}>
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
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials Section */}
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
            {[
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
            ].map((testimonial, index) => (
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

      <Sponsors />

      {/* Booking Section */}
      <section className="py-20">
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

            <div className="grid lg:grid-cols-2 gap-12 items-start">
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
                                className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                              >
                                <item.icon className="h-3 w-3 text-primary" />
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

              <SlideIn direction="right" delay={0.4}>
                <Card>
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
                </Card>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}