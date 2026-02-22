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
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4, type: "spring" }}
      whileHover={{ y: -5, scale: 1.1 }}
      className="flex flex-col items-center p-6 bg-slate-800/50 rounded-xl border border-white/5 backdrop-blur-sm group cursor-pointer min-w-[140px]"
    >
      <div className="text-neon-cyan text-4xl mb-3 group-hover:text-ice-cyan transition-colors duration-300 drop-shadow-lg">
        {link.icon}
      </div>
      <span className="text-base font-medium text-white group-hover:text-neon-cyan transition-colors duration-300">
        {link.name}
      </span>
    </motion.a>
  );
};

export default SocialLink;