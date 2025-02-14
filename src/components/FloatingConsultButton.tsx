import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FloatingConsultButton() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="fixed bottom-8 right-8 z-50 flex items-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <motion.button
                className="bg-primary-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-primary-700 transition-colors flex items-center space-x-2 overflow-hidden"
                whileHover={{
                    scale: 1.05,
                    transition: { type: 'spring', stiffness: 300, damping: 10 }
                }}
            >
                <motion.span
                    className="text-xl whitespace-nowrap"
                    initial={{ opacity: 0, maxWidth: 0 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        maxWidth: isHovered ? 200 : 0,
                        padding: isHovered ? '0px 10px' : '0px 0px'
                    }}
                    transition={{ duration: 0.3 }}
                >
                    Book Consultation
                </motion.span>
                <Calendar size={20} style={{ marginLeft: '0px' }} />
            </motion.button>
        </motion.div >
    );
} 