import React from 'react';
import { motion } from 'framer-motion';
import { Platform } from '../types';

interface PlatformCardProps {
  platform: Platform;
  delay: number; // Staggered animation delay
}

const PlatformCard: React.FC<PlatformCardProps> = ({ platform, delay }) => {
  return (
    <motion.a
      href={platform.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        delay,
        duration: 0.5,
        type: 'spring',
        stiffness: 120,
      }}
      whileHover={{
        y: -10,
        scale: 1.05,
        boxShadow: '0 20px 40px rgba(34, 211, 238, 0.3)',
      }}
      className="group relative rounded-2xl p-6 md:p-8 overflow-hidden cursor-pointer inline-block w-full"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-dark-navy/50 backdrop-blur-xl border border-white/10 transition-all duration-300" />

      {/* Animated hover glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-transparent opacity-0 group-hover:opacity-100"
        initial={{ opacity: 0 }}
      />

      {/* Animated rotating background element */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-32 -right-32 w-64 h-64 bg-neon-cyan/5 blur-3xl pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Icon */}
        {platform.icon && (
          <motion.div
            className="text-4xl md:text-5xl mb-4 mx-auto"
            whileHover={{ rotate: 360, y: -5 }}
            transition={{ duration: 0.7, type: 'spring' }}
          >
            {platform.icon}
          </motion.div>
        )}

        {/* Name */}
        <motion.h4
          className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          {platform.name}
        </motion.h4>

        {/* Description */}
        <motion.p
          className="text-slate-300 text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {platform.description}
        </motion.p>

        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl border-2 border-transparent bg-gradient-to-r from-neon-cyan via-transparent to-ice-cyan pointer-events-none"
          initial={{ opacity: 0 }}
        />
      </div>
    </motion.a>
  );
};

export default PlatformCard;