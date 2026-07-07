import React from 'react';
import { motion } from 'framer-motion';
import { LearningItem } from '../types';

interface CurrentlyLearningProps {
  items: LearningItem[];
}

const CurrentlyLearning: React.FC<CurrentlyLearningProps> = ({ items }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        type: 'spring',
        stiffness: 150,
      },
    },
  };

  return (
    <motion.div
      className="max-w-5xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.p
        className="text-lg md:text-xl text-slate-300 mb-10 md:mb-12 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        I'm constantly expanding my horizons! Here are some areas and technologies I'm currently diving into:
      </motion.p>

      <motion.div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              y: -6,
              scale: 1.1,
              boxShadow: '0 10px 30px rgba(34, 211, 238, 0.4)',
            }}
            className="relative group"
          >
            <div className="bg-gradient-to-br from-slate-800/60 via-slate-900/50 to-dark-navy/60 backdrop-blur-xl px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium border border-neon-cyan/30 hover:border-neon-cyan/60 transition-all duration-300 shadow-lg hover:shadow-neon-cyan/20 cursor-pointer overflow-hidden">
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-transparent opacity-0 group-hover:opacity-100 rounded-full"
                initial={{ opacity: 0 }}
              />

              {/* Content */}
              <div className="relative z-10 flex items-center gap-2">
                <span className="text-neon-cyan font-bold">→</span>
                <span className="text-white group-hover:text-neon-cyan transition-colors duration-300">{item.name}</span>
                <span className="text-slate-400 text-xs md:text-sm hidden sm:inline">({item.category})</span>
              </div>

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 border border-transparent bg-gradient-to-r from-neon-cyan via-transparent to-ice-cyan pointer-events-none"
                initial={{ opacity: 0 }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CurrentlyLearning;