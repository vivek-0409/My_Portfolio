import React from 'react';
import { motion } from 'framer-motion';
import { quickViewPanelData } from '../constants'; // Import quick view data

const QuickViewPanel: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100, y: 50 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
      whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(34, 211, 238, 0.2)' }}
      className="fixed bottom-8 left-8 rounded-2xl shadow-xl z-40
                 max-w-[240px] text-sm hidden md:block overflow-hidden group border border-white/10"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-900/50 to-dark-navy/60 backdrop-blur-xl" />

      {/* Animated hover glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100"
        initial={{ opacity: 0 }}
      />

      {/* Content */}
      <div className="relative z-10 p-4 md:p-5">
        {/* Header */}
        <motion.h5
          className="font-bold text-neon-cyan mb-3 md:mb-4 flex items-center gap-2"
          whileHover={{ x: 3 }}
        >
          <span className="text-lg">📋</span> Quick Info
        </motion.h5>

        {/* Content Items */}
        <div className="space-y-2.5 md:space-y-3">
          {/* Role */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="pb-2.5 md:pb-3 border-b border-white/10"
          >
            <p className="text-slate-300">
              <span className="font-semibold text-white">Role:</span>
            </p>
            <p className="text-neon-cyan text-xs md:text-sm font-medium mt-1">{quickViewPanelData.role}</p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="pb-2.5 md:pb-3 border-b border-white/10"
          >
            <p className="text-slate-300">
              <span className="font-semibold text-white">Stack:</span>
            </p>
            <p className="text-ice-cyan text-xs md:text-sm font-medium mt-1">{quickViewPanelData.techStack}</p>
          </motion.div>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-slate-300">
              <span className="font-semibold text-white">Availability:</span>
            </p>
            <div className="flex items-center gap-2 mt-1">
              <motion.span
                className="w-2 h-2 rounded-full bg-neon-cyan"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-accent-blue text-xs md:text-sm font-medium">
                {quickViewPanelData.availability}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Border glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 border-2 border-transparent bg-gradient-to-r from-neon-cyan via-transparent to-ice-cyan pointer-events-none"
        initial={{ opacity: 0 }}
      />
    </motion.div>
  );
};

export default QuickViewPanel;