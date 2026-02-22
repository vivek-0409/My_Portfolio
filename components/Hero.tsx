import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] text-center py-8 md:py-16 relative overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-20 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 max-w-4xl"
      >
        {/* Main greeting with animated name */}
        <motion.h2 
          variants={itemVariants} 
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 md:mb-6 tracking-tight leading-tight"
        >
          Hello, I'm{' '}
          <span className="text-gradient drop-shadow-lg">Vivek Parekh</span>
        </motion.h2>

        {/* Professional title with background */}
        <motion.div 
          variants={itemVariants}
          className="inline-block mb-6 md:mb-8"
        >
          <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-ice-cyan via-blue-400 to-neon-cyan font-bold">
            AI & Automation Developer
          </p>
        </motion.div>

        {/* Professional tagline */}
        <motion.p 
          variants={itemVariants} 
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed"
        >
          "Building intelligent systems with AI, automation, and real-world problem solving."
        </motion.p>

        {/* Call-to-action buttons */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(34, 211, 238, 0.6)" }}
            whileTap={{ scale: 0.92 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-dark-navy bg-neon-cyan shadow-lg hover:shadow-neon-lg transition-all duration-300 overflow-hidden group"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-ice-cyan to-neon-cyan rounded-full opacity-0 group-hover:opacity-100"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
            <span className="relative">View My Work</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(34, 211, 238, 0.4)" }}
            whileTap={{ scale: 0.92 }}
            onClick={() => document.getElementById('contact-prefs')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-neon-cyan border-2 border-neon-cyan shadow-lg hover:bg-neon-cyan/10 transition-all duration-300 backdrop-blur-sm"
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-12 md:mt-16 flex justify-center"
        >
          <svg className="w-6 h-6 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;