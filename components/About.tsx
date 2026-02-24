import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const paragraphs: string[] = [];

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
          className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 md:mb-8 leading-relaxed relative"
        >
          {/* Highlight specific keywords */}
          {paragraph.replace(
            /AI|Automation|Python|GitHub|hands-on|practical|solutions|intelligent|real-world/g,
            (match) => {
              const highlighted = [
                'AI',
                'Automation',
                'Python',
                'GitHub',
                'hands-on',
                'practical',
                'solutions',
                'intelligent',
                'real-world',
              ].includes(match);
              return highlighted ? `<span class="text-neon-cyan font-semibold">${match}</span>` : match;
            }
          ).split(/<span|<\/span>/g).map((part, i) =>
            part.includes('class') ? (
              <span
                key={i}
                className="text-neon-cyan font-semibold"
                dangerouslySetInnerHTML={{
                  __html: part.replace(/class="[^"]*"/, ''),
                }}
              />
            ) : (
              part
            )
          )}
          {/* Create inline spans for highlighted words */}
          {paragraph.split(/(\bAI\b|\bAutomation\b|\bPython\b|\bGitHub\b|\bhands-on\b|\bpractical\b|\bsolutions\b|\bintelligent\b|\breal-world\b)/g).map(
            (part, i) => {
              const isHighlighted = [
                'AI',
                'Automation',
                'Python',
                'GitHub',
                'hands-on',
                'practical',
                'solutions',
                'intelligent',
                'real-world',
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
      ))}
    </motion.div>
  );
};

export default About;