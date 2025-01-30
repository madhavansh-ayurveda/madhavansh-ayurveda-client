import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
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

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <ScrollToTopButton />
          <div className="min-h-screen flex flex-col bg-surface-50">
            <Navbar />
            <main className="flex-grow scrollable">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/auth" element={<Login />} />
                  <Route path="/doctors" element={<Doctors />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/appointments" element={<Appointments />} />
                  <Route path="/feedback/:id" element={<FeedbackForm />} />
                  <Route
                    path="/book-consultation"
                    element={<BookConsultation />}
                  />
                  <Route
                    path="/consultation/:id"
                    element={<ConsultationTracker />}
                  />
                  <Route
                    path="/track_consultation/"
                    element={<ConsultationTracker />}
                  />
                  <Route
                    path="/payment/:contactNote"
                    element={<PaymentGateway />}
                  />
                  <Route path="treatments" element={<Treatments />}>
                    <Route index element={<TreatmentDefault />} />
                    <Route
                      path="skin&hair"
                      element={<SkinAndHairTreatment />}
                    />
                    <Route
                      path="infertility&pCOD"
                      element={<InfertilityAndPCOD />}
                    />
                    <Route
                      path="kidney&gallbladder"
                      element={<KidneyAndBladder />}
                    />
                    <Route
                      path="arthritis&pain"
                      element={<ArthritisAndPain />}
                    />
                    <Route path="lifestyle" element={<Lifestyle />} />
                    <Route path="glucoma" element={<Glucoma />} />
                    <Route path="immunity" element={<Immunity />} />
                  </Route>
                </Routes>
              </AnimatePresence>
            </main>
            <FloatingConsultButton />
            <ScrollToTopButton />
          </div>
          <Footer />
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
