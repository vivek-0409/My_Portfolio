import React from 'react';
import { motion } from 'framer-motion';

const LearningPhilosophy: React.FC = () => {
  const philosophyPoints = [
    "My learning philosophy is rooted in a pragmatic, hands-on approach. I firmly believe that the most profound understanding comes from building and experimenting with real tools and technologies.",
    "Instead of merely consuming theoretical knowledge, I prioritize applying concepts immediately to practical projects. This iterative process of trying, failing, and refining allows me to grasp complexities deeply and develop resilient solutions.",
    "My goal is always to improve accuracy and impact, not just speed. I'm driven by a continuous improvement mindset, always seeking feedback and new challenges to evolve my skills as an AI and Automation Developer."
  ];

  const card1Variants = {
    hidden: { opacity: 0, x: -80, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: { duration: 1, type: 'spring', stiffness: 100, damping: 20 }
    },
  };

  const card2Variants = {
    hidden: { opacity: 0, y: 100, scale: 0.9, rotateX: 15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { duration: 1.2, type: 'spring', stiffness: 80, damping: 15 }
    },
  };

  const card3Variants = {
    hidden: { opacity: 0, x: 80, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: { duration: 1, type: 'spring', stiffness: 100, damping: 20 }
    },
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 perspective-1000">
      {philosophyPoints.map((point, index) => (
        <motion.div
          key={index}
          variants={index === 0 ? card1Variants : index === 1 ? card2Variants : card3Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative rounded-2xl p-6 md:p-8 overflow-hidden bg-gradient-to-br from-slate-800/60 via-slate-900/50 to-dark-navy/60 backdrop-blur-xl border border-white/10 group hover:border-neon-cyan/40 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-neon-cyan/20"
        >
          {/* Background elements */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100"
            initial={{ opacity: 0 }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute -top-32 -right-32 w-64 h-64 bg-neon-cyan/5 blur-3xl pointer-events-none"
          />

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              className="flex items-start gap-4 md:gap-6"
              whileHover={{ x: 5 }}
            >
              {/* Icon */}
              <motion.div
                className="flex-shrink-0 w-10 h-10 rounded-lg bg-neon-cyan/20 border border-neon-cyan/40 flex items-center justify-center text-neon-cyan font-bold text-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                {index + 1}
              </motion.div>

              {/* Text */}
              <motion.p
                className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed flex-1"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {point.split(/(\bhands-on\b|\bpractical\b|\bbuilding\b|\bexperimenting\b|\baccuracy\b|\bimpact\b)/g).map(
                  (part, i) => {
                    const isHighlighted = [
                      'hands-on',
                      'practical',
                      'building',
                      'experimenting',
                      'accuracy',
                      'impact',
                    ].includes(part);
                    return isHighlighted ? (
                      <motion.span
                        key={i}
                        className="text-neon-cyan font-semibold bg-neon-cyan/10 px-1.5 rounded-md"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(34, 211, 238, 0.2)' }}
                      >
                        {part}
                      </motion.span>
                    ) : (
                      part
                    );
                  }
                )}
              </motion.p>
            </motion.div>
          </div>

          {/* Border glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 border-2 border-transparent bg-gradient-to-r from-neon-cyan via-transparent to-ice-cyan pointer-events-none"
            initial={{ opacity: 0 }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default LearningPhilosophy;