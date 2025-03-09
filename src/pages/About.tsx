import { motion } from "framer-motion";
import { Heart, Clock, Users, Shield, MapPin, Phone, Mail } from "lucide-react";
import Meteors from "../components/ui/meteors";
import { Separator } from "@/components/ui/separator";

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

  const ayurved = [
    {
      heading: "What is Ayurveda",
      content:
        "The ancient Indian practice of Ayurveda, the ‘science of life’, goes back 5,000 years and involves how foods, herbs, emotions, climate and lifestyle impact the dynamics of our own physiology and psychology. It treats on a holistic level and goes by the principle that disease is caused by bioenergy imbalances between the three ‘humours’ or ‘Tridoshas’ Vata, Pitta and Kapha. The three ‘Gunas’ (forces) that form nature and also influence the human body – Satwa, Raja and Tama. Ayurveda has a rich tradition of specialized detoxifying therapies – such as oleation therapy, fomentations, Panchakarma therapy and special rejuvenation treatments for body and mind which stimulate immunity and slow down degeneration. Ayurveda also offers a variety of herbal and pharmaceutical preparations – decoctions, oils, ghee and powders for both internal and external use.",
      img: "/ayurveda1.jpg",
    },
    {
      heading: "Aim of Ayurveda",
      content:
        "The main aim is to maintain positive health of a healthy & to help a patient with various treatments to overcome the disease Ayurveda tells you the means to be healthy, stay healthy & live a longer happier, successful life. It deals with each & every aspect of our life. It offers complete life style guidance based on the individual personal needs. Ayurveda says you should go with nature & you can maintain the positive health, teaches you how to live harmony with nature. Ayurveda is basically: HEALTH PROMOTIVE, PREVENTIVE, CURATIVE AND NUTRITIVE",
      img: "/ayurveda2.jpg",
    },
    {
      heading: "Why Ayurveda?",
      content:
        "Ayurveda employs whatever Mother Nature provides in the form of plants, trees, shrubs & herbs to cure the ailments so it is…- having no side effects. Also you can earn to balance your body and adopt your diet and life style to suit your basic constitution on the guidelines of Ayurveda. Ayurvedic treatments differ from the majority of conventional cures in its unique approach towards healing. The principle of treating the sick and not the sickness is central to all forms of ayurvedic treatments. Rather than trying to cure a disease in isolation, Ayurveda takes into account an individual in his entirety. 'Samadosha samagnischa samadhatu malakriya Prasanna atma manah swastha itih abhidhiyate.'Having a balanced state of doshas, agni (digestive fire), dhatus (tissues) normal functioning of mala (waste products), cheerful state of atman (soul), sensory organs and mind are the symptoms of healthy life. Ayurveda believes that imbalance in the Doshas (3 Biological forces), Dhatus (7 Structural tissues) and Malas (body waste) generate diseases and the restoration of balance (of body elements) eliminates (Cures) diseases. The aim of treatment is not only to cure the disease but to root out the cause, so that it may not take place in the future. The Ayurvedic treatment firstly insists on removing the causative factors. The aim of treatment is also to improve vitality and to strengthen the immune system.",
      img: "/ayurveda3.jpg",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="overflow-hidden bg-[#f6fff2]"
    >
      {/* Hero Section with Parallax */}
      <motion.section
        variants={itemVariants}
        className="relative h-[60vh] bg-primary-600 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.jpg"
            alt="Ayurveda Background"
            className="w-full h-full object-cover"
            style={{
              transform: "scale(1.1)",
              opacity: 0.3,
            }}
          />
        </div>
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-100">
            About <span className="text-yellow-400">Madhavansh Ayurved</span>
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Dedicated to providing authentic Ayurvedic healthcare services by
            combining ancient wisdom with modern medical practices.
          </p>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <motion.section variants={containerVariants} className="py-20 relative">
        <>
          <svg
            width="356"
            height="356"
            viewBox="0 0 356 356"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute rotate-[180deg] -right-52 top-10"
          >
            <path
              d="M24.6355 89.5216C-24.3166 174.309 4.7338 282.727 89.5213 331.679C174.309 380.631 282.726 351.58 331.678 266.793C380.63 182.005 351.58 73.588 266.793 24.6359C182.005 -24.3163 73.5876 4.73406 24.6355 89.5216Z"
              fill="url(#paint0_linear_817_9652)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_817_9652"
                x1="266.793"
                y1="24.6358"
                x2="89.5309"
                y2="331.662"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7AEBD9" />
                <stop offset="1" stop-color="#E8FAF7" stop-opacity="0.53" />
              </linearGradient>
            </defs>
          </svg>
        </>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 px-4">
            <div className="w-full md:w-1/2 relative scale-[0.75] ">
              <img
                src="/Clinic.JPG"
                alt="Our Clinic"
                className="rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute inset-0 bg-primary-500/10 rounded-2xl" />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-chart-2 ">
                INTRODUCING ABOUT US
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  Shree Madhavansh Ayurved is an Ayurvedic Hospital evam
                  Panchkarma Kendra in Raipur Chhattisgarh that provides
                  Traditional Ayurvedic healing therapies in a comfortable
                  holistic and natural environment.
                </p>
                <p className="leading-relaxed">
                  Ayurveda is famed for its curative and preventive aspects of
                  Health care. We treat the cause, not just the symptoms,
                  considering your lifestyle, family history, and overall
                  health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Values Section with Hover Effects */}
      <motion.section
        variants={containerVariants}
        className="py-20 bg-[#edf4e8] relative"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Quality Care",
                desc: "Committed to providing authentic treatments",
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                desc: "Round-the-clock support",
              },
              {
                icon: Users,
                title: "Expert Team",
                desc: "Experienced Vaidyas at your service",
              },
              {
                icon: Shield,
                title: "Patient Privacy",
                desc: "Your information is secure with us",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <item.icon className="w-12 h-12 text-primary-500 mb-6" />
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <>
          <svg
            width="256"
            height="256"
            viewBox="0 0 356 356"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute rotate-[100deg] -bottom-20 -left-32 opacity-50"
          >
            <path
              d="M24.6355 89.5216C-24.3166 174.309 4.7338 282.727 89.5213 331.679C174.309 380.631 282.726 351.58 331.678 266.793C380.63 182.005 351.58 73.588 266.793 24.6359C182.005 -24.3163 73.5876 4.73406 24.6355 89.5216Z"
              fill="url(#paint0_linear_817_9652)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_817_9652"
                x1="266.793"
                y1="24.6358"
                x2="89.5309"
                y2="331.662"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7AEBD9" />
                <stop offset="1" stop-color="#E8FAF7" stop-opacity="0.53" />
              </linearGradient>
            </defs>
          </svg>
        </>
      </motion.section>

      {/* Meteor Mission */}
      <motion.section
        variants={itemVariants}
        className="bg-gradient-to-l from-primary-500 my-20 to-primary-600 max-w-7xl relative mx-auto text-white p-12 rounded-2xl"
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

      {/* Ayurveda Information Sections */}
      <motion.section
        variants={containerVariants}
        className=" w-full relative pb-20"
      >
        {ayurved.map((item, index) => (
          <>
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center my-10 py-10 last:my-0 max-w-7xl mx-auto`}
            >
              <div className="w-full md:w-1/2 p-4">
                <div className="relative h-[400px] rounded-2xl overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.heading}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <h2 className="text-3xl font-bold mb-6 text-chart-2">
                  {item.heading}
                </h2>
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
              </div>
            </motion.div>
            <Separator className="flex justify-center relative">
              <div
                className={
                  "w-10 h-10 absolute mx-auto -top-5 bg-primary-500 rounded-full " +
                  `${
                    index % 2 === 0
                      ? "translate-x-[-20rem]"
                      : "translate-x-[20rem]"
                  }`
                }
              ></div>
            </Separator>
          </>
        ))}
      </motion.section>

      {/* Contact Section with Map */}
      <motion.section
        variants={containerVariants}
        className="py-20 bg-primary-500 pt-56 relative z-10"
      >
        <>
          <svg
            width="180"
            height="180"
            viewBox="0 0 356 356"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute rotate-[-20deg] left-[50%] translate-x-[-50%] translate-y-[-50%] -top-0 z-1"
          >
            <path
              d="M24.6355 89.5216C-24.3166 174.309 4.7338 282.727 89.5213 331.679C174.309 380.631 282.726 351.58 331.678 266.793C380.63 182.005 351.58 73.588 266.793 24.6359C182.005 -24.3163 73.5876 4.73406 24.6355 89.5216Z"
              fill="url(#paint0_linear_817_9652)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_817_9652"
                x1="266.793"
                y1="24.6358"
                x2="89.5309"
                y2="331.662"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7AEBD9" />
                <stop offset="1" stop-color="#E8FAF7" stop-opacity="0.53" />
              </linearGradient>
            </defs>
          </svg>
        </>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div variants={itemVariants} className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-50">Get in Touch</h2>
              <p className="text-gray-300 text-lg">
                Have questions? Our team is here to help you on your journey to
                wellness.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Location",
                    info: "Indraprasth Phase 2, A20B, near MG Motor India, Raipur, Chhattisgarh 492013",
                  },
                  { icon: Phone, title: "Phone", info: "+91 123-4567-890" },
                  {
                    icon: Mail,
                    title: "Email",
                    info: "info@madhavayurved.com",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm"
                  >
                    <div className="bg-primary-100 p-3 rounded-full">
                      <item.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.info}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="h-[500px] rounded-xl overflow-hidden shadow-xl"
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
