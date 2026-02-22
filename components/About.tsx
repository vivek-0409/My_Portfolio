import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const paragraphs = [
    "Passionate AI & Automation Developer focused on building intelligent, real-world solutions using AI, Python, and scalable automation workflows. I follow a hands-on learning approach—actively experimenting, building projects, and contributing on GitHub. My work emphasizes practical applications, transforming complex ideas into efficient, impactful systems. Always eager to collaborate, innovate, and grow while staying aligned with the evolving future of AI and automation.",
    "I believe in a hands-on learning approach, constantly experimenting with new technologies and frameworks. My focus is always on practical applications, transforming complex ideas into functional and impactful solutions. From crafting AI models for various tasks to orchestrating seamless data flows, I enjoy every step of the development process.",
    "I'm consistently an active learner and maintain a strong presence on GitHub, regularly committing to projects and exploring new challenges. This dedication ensures my skills remain cutting-edge and my portfolio reflects real-time development.",
    "I'm always eager to collaborate on innovative projects, contribute to meaningful initiatives, and continuously expand my knowledge. If you're looking for guidance, collaboration, or just a chat about the future of AI and automation, feel free to connect!"
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