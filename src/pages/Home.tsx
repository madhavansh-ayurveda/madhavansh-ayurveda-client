import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Users, Phone, Clock, Star } from "lucide-react";
import AnimatedStat from "../components/AnimatedStat";
import { WhatweCard } from "../components/WhatweCard";
import ShimmerButton from "../components/ui/shimmer-button";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppSelector";
import { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
// import { api } from '@/api/axios';
import { authApi } from "@/api/authApi";
import { toast } from "react-hot-toast";
import { logout } from "@/store/features/authSlice";
import Cookies from "js-cookie";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const dispatch = useAppDispatch();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const { user } = useAppSelector((state) => state.auth);
  useEffect(() => {
    console.log();
    const checkUserFunc = async () => {
      if (user) {
        console.log("checking auth");

        const checkUser = await authApi.checkAuth();
        if (!checkUser.success) {
          try {
            localStorage.removeItem("authToken");
            Cookies.remove("authToken");
            dispatch(logout());
            toast.success("Logged out successfully");
          } catch (error) {
            console.error("Logout failed:", error);
            toast.error("Failed to logout. Please try again.");
          }
        }
      }
    };
    checkUserFunc();
  }, []);

  return (
    <>
      <motion.div initial="initial" animate="animate" className="">
        {/* Hero Section */}
        <motion.section
          className="relative bg-gradient-to-r from-primary-500 to-secondary-600 text-white py-12 md:py-20 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              className="space-y-4 md:space-y-6 text-center md:text-left"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                Your Journey to Wellness Begins Here
              </h1>
              <p className="text-lg md:text-xl text-primary-50 max-w-xl mx-auto md:mx-0">
                Experience the perfect blend of ancient Ayurvedic wisdom and
                modern healthcare practices and improve health outcomes for your
                life and family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="/book-consultation">
                  <ShimmerButton className="text-black font-semibold text-center hover:scale-105 transition-all w-[70%] md:w-auto">
                    Book Consultation
                  </ShimmerButton>
                </a>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white w-[70%]hover:text-primary-600 transition-all text-center"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Hide image on mobile, show on md and up */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/about-us.jpg"
                alt="Ayurvedic Treatment"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          className="max-w-7xl mx-auto px-4 my-16"
          variants={staggerChildren}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedStat value={1000} label="Happy Patients" />
            <AnimatedStat value={20} label="Expert Doctors" />
            <AnimatedStat value={15} label="Years Experience" />
            <AnimatedStat value={50} label="Treatments" />
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          className="max-w-7xl mx-auto px-4 my-16"
          variants={staggerChildren}
        >
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <Calendar className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Easy Scheduling</h3>
              <p className="text-gray-600">Book appointments online anytime</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <Users className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Expert Vaidyas</h3>
              <p className="text-gray-600">
                Experienced Ayurvedic practitioners
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <Phone className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Always here when you need us</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <Clock className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Holistic Care</h3>
              <p className="text-gray-600">Complete wellness solutions</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          className="bg-gray-50 py-16 flex flex-col items-center"
          variants={fadeIn}
        >
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our Patients Say
            </h2>
            <div className="relative w-full">
              {/* Left blur gradient */}
              <div className="hidden sm:block absolute left-0 top-0 w-28 h-full bg-gradient-to-r from-gray-50 to-transparent z-10" />
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                  dragFree: true,
                  containScroll: "trimSnaps",
                }}
                plugins={[
                  Autoplay({
                    delay: 2500,
                  }),
                ]}
                className="mx-auto w-[95%]"
              >
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-full sm:basis-1/2 lg:basis-1/3 pl-4"
                    >
                      <Card className="h-full mx-auto max-w-[650px]">
                        <CardContent className="p-4 md:p-6">
                          <div className="flex items-center mb-4">
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 fill-current"
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4">
                            "The Ayurvedic treatment I received here was
                            transformative. The doctors are knowledgeable and
                            caring."
                          </p>
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                              <span className="text-primary-600 font-semibold">
                                {String.fromCharCode(65 + index)}
                              </span>
                            </div>
                            <div className="ml-4">
                              <p className="font-semibold">Patient Name</p>
                              <p className="text-sm text-gray-500">
                                Treated for: Stress Management
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 w-full z-20">
                  <CarouselPrevious className="-left-4 md:-left-5 bg-white/90 hover:bg-white" />
                  <CarouselNext className="-right-4 md:-right-5 bg-white/90 hover:bg-white" />
                </div>
              </Carousel>
              {/* Right blur gradient */}
              <div className="hidden sm:block absolute right-0 top-0 w-28 h-full bg-gradient-to-l from-gray-50 to-transparent z-10" />
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="bg-gradient-to-r from-primary-500 to-secondary-600 text-white py-16 mt-16"
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Start Your Wellness Journey Today
            </h2>
            <p className="text-xl mb-8">
              Book your consultation and experience the power of Ayurveda
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors"
            >
              Schedule Appointment
            </motion.button>
          </div>
        </motion.section>

        <div className="bg-[#eef7f7] mt-0 py-16">
          <WhatweCard />
        </div>
      </motion.div>
    </>
  );
}