import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
  delay: number; // Staggered animation delay
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay, duration: 0.5, type: 'spring', stiffness: 100 }}
      whileHover={{
        y: -8,
        boxShadow: '0 0 30px rgba(34, 211, 238, 0.4)',
      }}
      className="group relative rounded-2xl p-6 md:p-8 overflow-hidden cursor-pointer"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-dark-navy/50 backdrop-blur-xl border border-white/10" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ opacity: 0 }}
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-neon-cyan/10 blur-3xl pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10">
        <motion.h4 
          className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3"
          whileHover={{ x: 5, color: '#22D3EE' }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-neon-cyan text-3xl">✦</span>
          {skill.category}
        </motion.h4>

        <div className="flex flex-wrap gap-2 md:gap-3">
          {skill.items.map((item, index) => (
            <motion.span
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: delay + index * 0.1,
                type: 'spring',
                stiffness: 200,
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: 'rgba(34, 211, 238, 0.3)',
                y: -3,
              }}
              className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium bg-gradient-to-r from-neon-cyan/20 to-ice-cyan/10 text-ice-cyan border border-neon-cyan/30 hover:border-neon-cyan/60 transition-all duration-300 shadow-lg shadow-neon-cyan/10"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Animated border glow on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity border-2 border-transparent bg-gradient-to-r from-neon-cyan via-transparent to-ice-cyan rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
      />
    </motion.div>
  );
};

export default SkillCard;