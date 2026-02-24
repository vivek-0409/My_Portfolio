import React from 'react';
import { motion } from 'framer-motion';
import { SocialLink as SocialLinkType } from '../types';

interface SocialLinkProps {
  link: SocialLinkType;
  delay: number;
}

const SocialLink: React.FC<SocialLinkProps> = ({ link, delay }) => {
  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        delay,
        duration: 0.5,
        type: 'spring',
        stiffness: 120,
      }}
      whileHover={{
        y: -12,
        scale: 1.12,
        boxShadow: '0 20px 40px rgba(34, 211, 238, 0.4)',
      }}
      className="relative group rounded-xl overflow-hidden cursor-pointer min-w-[140px] h-[180px] md:h-[200px]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-900/50 to-dark-navy/60 backdrop-blur-xl border border-white/10" />

      {/* Animated hover glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-accent-blue/10 opacity-0 group-hover:opacity-100"
        initial={{ opacity: 0 }}
      />

      {/* Rotating background element */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-20 -right-20 w-40 h-40 bg-neon-cyan/10 blur-2xl pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
        {/* Icon */}
        <motion.div
          className="text-4xl md:text-5xl mb-3 group-hover:text-ice-cyan transition-colors duration-300"
          whileHover={{ rotate: 360, scale: 1.2 }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            rotate: { duration: 0.8, type: 'spring' },
            scale: { duration: 0.8, type: 'spring' },
          }}
        >
          {link.icon}
        </motion.div>

        {/* Name */}
        <motion.span
          className="text-base md:text-lg font-bold text-white group-hover:text-neon-cyan transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          {link.name}
        </motion.span>

        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 border-2 border-transparent bg-gradient-to-r from-neon-cyan via-transparent to-ice-cyan pointer-events-none"
          initial={{ opacity: 0 }}
        />
      </div>
    </motion.a>
  );
};

export default SocialLink;