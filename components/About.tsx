import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const paragraphs: string[] = [
    "🐍 Python-driven developer crafting intelligent automation & scalable systems that transform complex problems into elegant solutions.",
    "💻 Active open-source contributor leveraging cutting-edge AI to build practical, innovative applications.",
    "🤝 Passionate about collaboration, continuous learning, and turning visionary ideas into impactful technology."
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {paragraphs.map((paragraph, index) => (
        <motion.p
          key={index}
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed relative"
        >
          {paragraph.split(/(\bAI\b|\bAutomation\b|\bPython\b|\bGitHub\b|\bhands-on\b|\bpractical\b|\bsolutions\b|\bintelligent\b|\breal-world\b)/gi).map(
            (part, i) => {
              const isHighlighted = /AI|Automation|Python|GitHub|hands-on|practical|solutions|intelligent|real-world/i.test(part);
              return isHighlighted ? (
                <motion.span
                  key={i}
                  className="text-neon-cyan font-bold bg-neon-cyan/5 px-2 py-0.5 rounded-md border border-neon-cyan/10"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(34, 211, 238, 0.15)',
                    borderColor: 'rgba(34, 211, 238, 0.3)',
                    boxShadow: '0 0 15px rgba(34, 211, 238, 0.2)'
                  }}
                >
                  {part}
                </motion.span>
              ) : (
                part
              );
            }
          )}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default About;