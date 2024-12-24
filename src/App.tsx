import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home.tsx';
import About from './Pages/About.tsx';
import Login from './Pages/Login.tsx';
import Register from './Pages/Register.tsx';
import Doctors from './Pages/Doctors';
// import Profile from './pages/Profile';
// import Appointments from './pages/Appointments';
import BookConsultation from './Pages/BookConsultation.tsx';
import Contact from './Pages/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';
import FloatingConsultButton from './components/FloatingConsultButton';
import './index.css';
import { Toaster } from 'react-hot-toast';
import ConsultationTracker from './Pages/ConsultationTracker.tsx';
import Profile from './Pages/Profile.tsx';
import Appointments from './Pages/Appointments.tsx';

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
                                    <Route path="/login" element={<Login />} />
                                    <Route path="/register" element={<Register />} />
                                    <Route path="/doctors" element={<Doctors />} />
                                    <Route path="/contact" element={<Contact />} />
                                    <Route path="/profile" element={<Profile />} />
                                    <Route path="/appointments" element={<Appointments />} />
                                    <Route path="/book-consultation" element={<BookConsultation />} />
                                    <Route path="/consultation/:id" element={<ConsultationTracker />} />
                                    <Route path="/consultation/" element={<ConsultationTracker />} />
                                </Routes>
                            </AnimatePresence>
                        </main>
                        <FloatingConsultButton />
                        <ScrollToTopButton />
                    </div>
                    <Footer />
                </Router>
                <Toaster
                    position='top-right'
                    containerStyle={{
                        top: 80,
                        right: 20,
                    }}
                    toastOptions={{
                        style: {
                            background: '#fff',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        },
                    }}
                />
            </PersistGate>
        </Provider>
    );
};

export default App; 