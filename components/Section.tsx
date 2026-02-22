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
      transition={{ duration: 0.6 }}
      className="py-20 my-8 border-b border-white/5 last:border-none"
    >
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 inline-block relative">
          {title}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-neon-cyan to-ice-cyan w-full mt-2 origin-left rounded-full"
          />
        </h3>
      </div>
      {children}
    </motion.section>
  );
};

export default Section;