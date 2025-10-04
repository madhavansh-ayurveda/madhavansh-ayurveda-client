import { motion } from "framer-motion";
import { Heart, Users, Shield, MapPin, Phone, Mail, Award } from "lucide-react";
import { Heart, Users, Shield, MapPin, Phone, Mail, Award } from "lucide-react";
import Meteors from "../components/ui/meteors";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="overflow-hidden bg-white"
    >
      {/* Hero Section */}
      {/* Hero Section */}
      <motion.section
        variants={itemVariants}
        className="relative h-[60vh] bg-/90 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/ayurveda2.jpg"
            src="/ayurveda2.jpg"
            alt="Ayurveda Background"
            className="w-full h-full object-cover brightness-75 blur-sm"
            style={{
              opacity: 0.80,
            }}
          />
        </div>
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            About <span className="text-destructive bg-white rounded-xl px-4">Madhavansh Ayurved</span>
          </h1>
          <p className="text-gray-200 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          <p className="text-gray-200 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Dedicated to providing authentic Ayurvedic healthcare services by
            combining ancient wisdom with modern medical practices.
          </p>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <motion.section variants={containerVariants} className="py-20">
      <motion.section variants={containerVariants} className="py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 px-4">
            <motion.div variants={itemVariants} className="w-full md:w-1/2 relative">
            <motion.div variants={itemVariants} className="w-full md:w-1/2 relative">
              <img
                src="/Clinic.JPG"
                alt="Our Clinic"
                className="rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-2xl" />
            </motion.div>
            <motion.div variants={itemVariants} className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-primary">
                Welcome to Our Center of Healing
              <div className="absolute inset-0 bg-primary/10 rounded-2xl" />
            </motion.div>
            <motion.div variants={itemVariants} className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-primary">
                Welcome to Our Center of Healing
              </h2>
              <div className="space-y-4 text-foreground/80">
              <div className="space-y-4 text-foreground/80">
                <p className="leading-relaxed">
                  Shree Madhavansh Ayurved is an Ayurvedic Hospital and Panchkarma Kendra in Raipur, Chhattisgarh, that provides traditional Ayurvedic healing therapies in a comfortable, holistic, and natural environment.
                  Shree Madhavansh Ayurved is an Ayurvedic Hospital and Panchkarma Kendra in Raipur, Chhattisgarh, that provides traditional Ayurvedic healing therapies in a comfortable, holistic, and natural environment.
                </p>
                <p className="leading-relaxed">
                  Established in November 2021 by Dr. Priyanka Rajpoot, our center was founded to offer complete healthcare solutions for patients. We provide next-generation treatments through highly experienced and specialized physicians, including services like OPD, IPD, and authentic Kerliya Panchkarma, all while ensuring the highest standards of hygiene.
                </p>
                 <p className="leading-relaxed">
                  Furthermore, we are in the process of developing our own quality-oriented ayurvedic medicine manufacturing, which will soon be available.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Meet Our Founder Section */}
      <motion.section variants={containerVariants} className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Meet Our Founder</h2>
            <p className="text-lg text-foreground/70 mt-2">The driving force behind our holistic vision.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div variants={itemVariants} className="w-full md:w-1/3 flex justify-center">
                <div className="relative">
                    <Avatar className="w-64 h-64 border-4 border-white shadow-xl">
                        <AvatarImage src="/Dr-Priyanka-Rajpoot.jpeg" alt="Dr. Priyanka Rajpoot" />
                        <AvatarFallback className="text-4xl">DR</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
                        <Award className="w-8 h-8" />
                    </div>
                </div>
            </motion.div>
            <motion.div variants={itemVariants} className="w-full md:w-2/3 space-y-4">
                <h3 className="text-3xl font-bold text-secondary">Dr. Priyanka Rajpoot</h3>
                <p className="text-lg font-semibold text-primary">Founder & Medical Director</p>
                <p className="text-foreground/80 leading-relaxed">
                    Dr. Priyanka Rajpoot is a distinguished Ayurvedic expert with extensive experience in the domain. She graduated in 2012 from Chhattisgarh Ayurvedic Medical College Rajnandgaon, which is affiliated with Pt Ravi Shankar Shukla University Raipur. In continuation, she has completed Panchakarma therapies course at the National Ayurveda Research Institute of Panchakarma (NARIP Kerla, Gov. of India), acquiring extensive knowledge from highly experienced and knowledgeable doctors.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                    Thereafter, she began her practice with various organizations in 2013. Initially, she became part of the Patanjali organization as an Ayurvedic medicine practitioner for over a year. Later on, she has given services as a medical officer for over 5 years with the National Health Mission in various areas of Chhattisgarh, including Uttar Bastar Kanker and Janjgir Champa. Subsequently, she practiced internationally as an Ayurveda physician in Vienna, Austria for more than 3 years (Nov. 2018 to Aug. 2021).
                </p>
                <p className="text-foreground/80 leading-relaxed">
                    She has experienced great success in the fields of infertility treatment, renal stone, cholelithiasis, glaucoma, pain management, obesity, among others.
                </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      {/* Values Section */}
      <motion.section
        variants={containerVariants}
        className="py-20"
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Our Core Values</h2>
            <p className="text-lg text-foreground/70 mt-2">The principles that guide our practice.</p>
          </div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Our Core Values</h2>
            <p className="text-lg text-foreground/70 mt-2">The principles that guide our practice.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Quality Care",
                desc: "Committed to providing authentic and effective treatments.",
                desc: "Committed to providing authentic and effective treatments.",
              },
              {
                icon: Shield,
                title: "Patient First",
                desc: "Your health, privacy, and comfort are our top priorities.",
                icon: Shield,
                title: "Patient First",
                desc: "Your health, privacy, and comfort are our top priorities.",
              },
              {
                icon: Users,
                title: "Expert Team",
                desc: "A dedicated team of experienced Vaidyas at your service.",
                desc: "A dedicated team of experienced Vaidyas at your service.",
              },
              {
                icon: Award,
                title: "Holistic Approach",
                desc: "Treating the root cause, not just the symptoms, for lasting wellness.",
                icon: Award,
                title: "Holistic Approach",
                desc: "Treating the root cause, not just the symptoms, for lasting wellness.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
                    <item.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
                    <item.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
                <p className="text-foreground/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Meteor Mission */}
      <motion.section
        variants={itemVariants}
        className="bg-accent my-20 max-w-7xl relative mx-auto text-white p-12 rounded-2xl"
      >
        <div className="relative text-white overflow-hidden">
          <div className="relative flex h-[200px] w-full flex-col items-center justify-center">
            <Meteors number={20} />
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              <p className="text-lg leading-relaxed opacity-90 text-white">
                To revolutionize healthcare by making authentic Ayurvedic
                treatments accessible to everyone. We strive to bridge the gap
                between ancient wisdom and modern healthcare needs, providing a
                holistic approach to wellness that treats not just the symptoms,
                but the root cause of health issues.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section with Map */}
      <motion.section
        variants={containerVariants}
        className="py-20 bg-muted/50"
      >
        className="py-20 bg-muted/50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Get in Touch</h2>
            <p className="text-lg text-foreground/70 mt-2">We're here to help you on your journey to wellness.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Get in Touch</h2>
            <p className="text-lg text-foreground/70 mt-2">We're here to help you on your journey to wellness.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Location",
                    info: "Indraprasth Phase 2, A20B, near MG Motor India, Raipur, Chhattisgarh 492013",
                  },
                  { icon: Phone, title: "Phone", info: "+91 7509181081" },
                  { icon: Phone, title: "Phone", info: "+91 7509181081" },
                  {
                    icon: Mail,
                    title: "Email",
                    info: "info@madhavayurved.com",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm"
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm"
                  >
                    <div className="bg-primary/10 p-3 rounded-full mt-1">
                      <item.icon className="w-6 h-6 text-primary" />
                    <div className="bg-primary/10 p-3 rounded-full mt-1">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                      <h3 className="font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-foreground/80">{item.info}</p>
                      <p className="text-foreground/80">{item.info}</p>
                    </div>
                  </motion.div>
                ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="h-[400px] rounded-xl overflow-hidden shadow-xl border-4 border-white"
              className="h-[400px] rounded-xl overflow-hidden shadow-xl border-4 border-white"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14875.552164028377!2d81.5852127!3d21.2362878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28df003d3afdb7%3A0x62e404df900def55!2sShree%20Madhavansh%20Ayurved%20Chikitshayala%20Evam%20Punchkarm%20Kendra!5e0!3m2!1sen!2sin!4v1733484152697!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}