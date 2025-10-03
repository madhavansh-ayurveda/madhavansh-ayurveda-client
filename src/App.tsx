import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Doctors from "./pages/Doctors";
import BookConsultation from "./pages/BookConsultation";
import Contact from "./pages/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";
import FloatingConsultButton from "./components/FloatingConsultButton";
import "./index.css";
import { Toaster } from "react-hot-toast";
import ConsultationTracker from "./pages/ConsultationTracker";
import Profile from "./pages/Profile";
import Appointments from "./pages/Appointments";
import PaymentGateway from "./pages/PaymentGateway";
import { FeedbackForm } from "./pages/FeedbackForm";
import { Treatments } from "@/pages/Treatments";
import { TreatmentDefault } from "@/pages/TreatmentDefault";
import { SkinAndHairTreatment } from "@/pages/Treatments/SkinAndHairTreatment";
import { InfertilityAndPCOD } from "./pages/Treatments/InfertilityAndPCOD";
import { KidneyAndBladder } from "./pages/Treatments/KidneyAndBladder";
import { ArthritisAndPain } from "./pages/Treatments/ArthritisAndPain";
import { Lifestyle } from "./pages/Treatments/Lifestyle";
import { Glucoma } from "./pages/Treatments/Glucoma";
import { Immunity } from "./pages/Treatments/Immunity";
import BlogList from './pages/Blog/BlogList';
import BlogPost from './pages/Blog/BlogPost';
import ServicesLayout from "./components/services/ServiceLayout";
import ServicesOverview from "./components/services/service-overview";
import serviceJson from "./assets/service.json"
import AppNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServiceDetailPage from "./pages/Service";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <AppNavbar />
          <ScrollToTopButton />
          <div className="min-h-screen flex flex-col bg-surface-50">
            {/* Main Content Wrapper */}
            <main className="flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/auth" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/doctors" element={<Doctors />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/appointments" element={<Appointments />} />
                  <Route path="/feedback/:id" element={<FeedbackForm />} />
                  <Route path="/book-consultation" element={<BookConsultation />} />
                  <Route path="/consultation/:id" element={<ConsultationTracker />} />
                  <Route path="/track_consultation/" element={<ConsultationTracker />} />
                  <Route path="/payment/:contactNote" element={<PaymentGateway />} />

                  <Route path="treatments" element={<Treatments />}>
                    <Route index element={<TreatmentDefault />} />
                    <Route path="skin&hair" element={<SkinAndHairTreatment />} />
                    <Route path="infertility&pCOD" element={<InfertilityAndPCOD />} />
                    <Route path="kidney&gallbladder" element={<KidneyAndBladder />} />
                    <Route path="arthritis&pain" element={<ArthritisAndPain />} />
                    <Route path="lifestyle" element={<Lifestyle />} />
                    <Route path="glucoma" element={<Glucoma />} />
                    <Route path="immunity" element={<Immunity />} />
                  </Route>

                  <Route
                    path="/services"
                    element={
                      <ServicesLayout>
                        <ServicesOverview services={serviceJson} />
                      </ServicesLayout>
                    }
                  />
                  <Route
                    path="/services/:serviceId"
                    element={
                      <ServicesLayout>
                        <ServiceDetailPage />
                      </ServicesLayout>
                    }
                  />

                  <Route path="/blog" element={<BlogList />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                </Routes>
              </AnimatePresence>
            </main>

            {/* Floating Buttons (placed above the footer) */}
            <FloatingConsultButton />
            <ScrollToTopButton />

            {/* Footer with no overlap */}
            <Footer />
          </div>
        </Router>

        <Toaster
          position="top-right"
          containerStyle={{
            top: 80,
            right: 20,
          }}
          toastOptions={{
            style: {
              background: "#fff",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            },
          }}
        />
      </PersistGate>
    </Provider>
  );
};


export default App;