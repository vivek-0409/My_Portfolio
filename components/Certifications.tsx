import React from 'react';
import { motion } from 'framer-motion';
import { CertificationItem } from '../types';

interface CertificationsProps {
  certification: CertificationItem;
  delay: number; // Staggered animation delay
  className?: string;
}

const Certifications: React.FC<CertificationsProps> = ({ certification, delay, className = '' }) => {
  return (
    <motion.a
      href={certification.link || '#'}
      target={certification.link ? "_blank" : "_self"}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        delay,
        duration: 0.5,
        type: 'spring',
        stiffness: 120,
      }}
      whileHover={{
        y: -8,
        scale: 1.04,
        boxShadow: '0 20px 40px rgba(34, 211, 238, 0.3)',
      }}
      className={`relative rounded-2xl p-6 md:p-8 text-center overflow-hidden group cursor-pointer transition-all duration-300 ${
        certification.featured
          ? 'bg-gradient-to-br from-slate-700/60 via-slate-800/50 to-dark-navy/60 border border-neon-cyan/40 shadow-lg shadow-neon-cyan/30'
          : 'bg-gradient-to-br from-slate-800/60 via-slate-900/50 to-dark-navy/60 border border-white/10 hover:border-neon-cyan/30'
      } ${className}`}
    >
      {/* Background elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-neon-cyan/15 to-transparent opacity-0 group-hover:opacity-100"
        initial={{ opacity: 0 }}
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute -top-32 -right-32 w-64 h-64 bg-neon-cyan/5 blur-3xl pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        {certification.icon && (
          <motion.div
            className={`text-neon-cyan mb-4 mx-auto ${
              certification.featured ? 'text-6xl md:text-7xl' : 'text-5xl md:text-6xl'
            }`}
            whileHover={{ rotate: 360, scale: 1.15, y: -5 }}
            transition={{ duration: 0.8, type: 'spring' }}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {certification.icon}
          </motion.div>
        )}

        {/* Name */}
        <motion.h4
          className={`font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300 ${
            certification.featured ? 'text-xl md:text-3xl' : 'text-lg md:text-2xl'
          }`}
          whileHover={{ scale: 1.05 }}
        >
          {certification.name}
        </motion.h4>

        {/* Issuer and Year */}
        <motion.p
          className="text-slate-300 text-sm md:text-base mb-2"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {certification.issuer}{' '}
          <span className="text-neon-cyan font-semibold">({certification.year})</span>
        </motion.p>

        {/* Description for featured items */}
        {certification.description && (
          <motion.p
            className="text-slate-400 text-sm md:text-base italic mt-3 leading-relaxed"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
          >
            {certification.description}
          </motion.p>
        )}

        {/* Link indicator */}
        {certification.link && certification.link !== '#' && (
          <motion.span
            className="text-ice-cyan text-xs md:text-sm font-semibold mt-3 md:mt-4 block group-hover:text-neon-cyan transition-colors duration-300 flex items-center justify-center gap-2"
            whileHover={{ x: 3 }}
          >
            View Credential
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586L10.293 6.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.span>
        )}
      </div>

      {/* Border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 border-2 border-transparent bg-gradient-to-r from-neon-cyan via-transparent to-ice-cyan pointer-events-none"
        initial={{ opacity: 0 }}
      />
    </motion.a>
  );
};

export default Certifications;