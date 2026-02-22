import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem } from '../types';

interface ExperienceJourneyProps {
  timeline: ExperienceItem[];
}

const ExperienceJourney: React.FC<ExperienceJourneyProps> = ({ timeline }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Vertical line for the timeline */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute left-1/2 transform -translate-x-1/2 w-1.5 h-full bg-gradient-to-b from-neon-cyan via-ice-cyan to-accent-blue hidden md:block origin-top rounded-full shadow-lg shadow-neon-cyan/30"
      />

      {timeline.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            delay: index * 0.15,
            duration: 0.6,
            type: 'spring',
            stiffness: 100,
          }}
          className={`mb-8 md:mb-12 flex items-stretch w-full ${
            isMobile ? '' : index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
          }`}
        >
          {/* Content for left side on desktop (even items) */}
          <div className="hidden md:block w-1/2">
            {!isMobile && index % 2 === 0 && (
              <motion.div
                className="text-right pr-8 h-full"
                whileHover={{ x: -5 }}
              >
                <div className="relative rounded-2xl p-6 md:p-7 overflow-hidden bg-gradient-to-br from-slate-800/60 via-slate-900/50 to-dark-navy/60 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-neon-cyan/20 transition-all duration-300 group h-full flex flex-col justify-center">
                  {/* Background elements */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ opacity: 0 }}
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute -top-32 -right-32 w-64 h-64 bg-neon-cyan/5 blur-3xl pointer-events-none"
                  />

                  <div className="relative z-10">
                    <motion.h4
                      className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300"
                      whileHover={{ x: -3 }}
                    >
                      {item.title}
                    </motion.h4>
                    <p className="text-slate-300 text-sm md:text-base">{item.description}</p>
                  </div>

                  {/* Border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 border-2 border-transparent bg-gradient-to-r from-neon-cyan via-transparent to-ice-cyan pointer-events-none"
                    initial={{ opacity: 0 }}
                  />
                </div>
              </motion.div>
            )}
          </div>

          {/* Timeline dot */}
          <motion.div
            whileHover={{ scale: 1.3 }}
            className="relative z-20 w-6 md:w-8 h-6 md:h-8 rounded-full bg-gradient-to-br from-neon-cyan to-ice-cyan flex items-center justify-center shrink-0 shadow-lg shadow-neon-cyan/60 border-4 border-dark-navy cursor-pointer group"
          >
            <motion.span
              className="text-dark-navy text-xs md:text-sm font-bold group-hover:scale-125"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {item.year.slice(-2)}
            </motion.span>
          </motion.div>

          {/* Content for right side on desktop (odd items) and always on mobile */}
          <div className="w-full md:w-1/2 pl-4 md:pl-8">
            {(isMobile || index % 2 !== 0) && (
              <motion.div
                className="relative rounded-2xl p-6 md:p-7 overflow-hidden bg-gradient-to-br from-slate-800/60 via-slate-900/50 to-dark-navy/60 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-neon-cyan/20 transition-all duration-300 group"
                whileHover={{ x: 5 }}
              >
                {/* Background elements */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity }}
                  className="absolute -bottom-32 -right-32 w-64 h-64 bg-neon-cyan/5 blur-3xl pointer-events-none"
                />

                <div className="relative z-10">
                  <motion.h4
                    className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300"
                    whileHover={{ x: 3 }}
                  >
                    {item.title}
                  </motion.h4>
                  <p className="text-slate-300 text-sm md:text-base">{item.description}</p>
                  {isMobile && (
                    <span className="text-neon-cyan text-xs font-semibold mt-3 block">{item.year}</span>
                  )}
                </div>

                {/* Border glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 border-2 border-transparent bg-gradient-to-r from-neon-cyan via-transparent to-ice-cyan pointer-events-none"
                  initial={{ opacity: 0 }}
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceJourney;