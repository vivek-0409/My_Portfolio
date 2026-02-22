import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      className="py-12 md:py-20 lg:py-24 my-6 md:my-8 relative"
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute -left-20 top-0 w-40 h-40 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute -right-20 bottom-10 w-40 h-40 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="text-center mb-12 md:mb-16 lg:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 inline-block relative">
            {title}
            
            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7, type: 'spring', stiffness: 100 }}
              className="h-1.5 md:h-2 bg-gradient-to-r from-neon-cyan via-ice-cyan to-accent-blue w-full mt-2 md:mt-3 rounded-full origin-left shadow-lg shadow-neon-cyan/50"
            />
          </h3>
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

export default Section;