import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppSvg } from '../constants';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '7041175669'; // TODO: Replace with your WhatsApp phone number (e.g., '1234567890')
  const message = "*Hello, I visited your bio website and found your work very impressive. I am interested in working with you and would love to get guidance and more details regarding learning and collaboration.*";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
      whileHover={{
        scale: 1.2,
        boxShadow: '0 0 40px rgba(34, 211, 238, 0.8)',
      }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 bg-gradient-to-br from-neon-cyan to-ice-cyan text-dark-navy p-4 md:p-5 rounded-full shadow-2xl shadow-neon-cyan/50 flex items-center justify-center
                 text-2xl md:text-3xl font-bold z-50 border-2 border-white/20 group overflow-hidden"
      aria-label="Contact me on WhatsApp"
    >
      {/* Animated background ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-neon-cyan opacity-0 group-hover:opacity-100"
        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Icon with pulse animation */}
      <motion.div
        className="relative z-10"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <WhatsAppSvg />
      </motion.div>

      {/* Tooltip */}
      <motion.div
        className="absolute bottom-full right-0 mb-4 bg-dark-navy text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-neon-cyan/30"
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
      >
        Chat on WhatsApp
      </motion.div>
    </motion.a>
  );
};

export default WhatsAppButton;