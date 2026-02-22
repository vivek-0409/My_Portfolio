import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] text-center py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_50%)] animate-pulse-slow"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10"
      >
        {/* Main greeting with animated name */}
        <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-ice-cyan drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">Vivek Parekh</span>
        </motion.h2>

        {/* Professional title */}
        <motion.p variants={itemVariants} className="text-2xl md:text-4xl text-cool-gray mb-6">
          An <span className="text-ice-cyan font-semibold">AI & Automation Developer</span>
        </motion.p>

        {/* Professional tagline - Typewriter style could be added here, but simple fade is elegant */}
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          "Building intelligent systems with AI, automation, and real-world problem solving."
        </motion.p>

        {/* Call-to-action buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-neon-cyan text-dark-navy font-bold py-4 px-10 rounded-full shadow-lg hover:bg-ice-cyan transition-colors"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact-prefs')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-neon-cyan text-neon-cyan font-bold py-4 px-10 rounded-full shadow-lg hover:bg-neon-cyan/10 transition-colors"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;