import React from 'react';
import { motion } from 'framer-motion';
import { LinkedinIcon, EmailSvg, WhatsAppSvg } from '../constants';

const ContactPreferences: React.FC = () => {
  const emailAddress = 'vivekparekh0409@gmail.com'; // User's email address

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const Card = ({
    href,
    icon,
    title,
    desc,
  }: {
    href: string | undefined;
    icon: React.ReactNode;
    title: string;
    desc: string;
  }) => (
    <motion.a
      variants={item}
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      whileHover={{
        y: -12,
        scale: 1.05,
        boxShadow: '0 30px 50px rgba(34, 211, 238, 0.3)',
      }}
      whileTap={{ scale: 0.95 }}
      className="relative rounded-2xl p-6 md:p-8 overflow-hidden group cursor-pointer flex flex-col items-center text-center h-full"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-900/50 to-dark-navy/60 backdrop-blur-xl border border-white/10 group-hover:border-neon-cyan/40 transition-all duration-300" />

      {/* Animated hover glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-transparent opacity-0 group-hover:opacity-100"
        initial={{ opacity: 0 }}
      />

      {/* Rotating background element */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute -top-32 -right-32 w-64 h-64 bg-neon-cyan/5 blur-3xl pointer-events-none"
      />

      {/* Icon */}
      <motion.div
        className="text-neon-cyan text-5xl md:text-6xl mb-4 md:mb-6 relative z-10 p-3 md:p-4 bg-gradient-to-br from-neon-cyan/20 to-transparent rounded-full border border-neon-cyan/30 group-hover:border-neon-cyan/60 transition-all duration-300"
        whileHover={{ rotate: 360, scale: 1.2, y: -8 }}
        animate={{
          y: [0, -6, 0],
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
        {icon}
      </motion.div>

      {/* Title */}
      <motion.h4
        className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-neon-cyan transition-colors duration-300 relative z-10"
        whileHover={{ scale: 1.05 }}
      >
        {title}
      </motion.h4>

      {/* Description */}
      <motion.p
        className="text-slate-300 text-sm md:text-base relative z-10 leading-relaxed flex-grow"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        {desc}
      </motion.p>

      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 border-2 border-transparent bg-gradient-to-r from-neon-cyan via-transparent to-ice-cyan pointer-events-none"
        initial={{ opacity: 0 }}
      />
    </motion.a>
  );

  return (
    <motion.div
      className="max-w-5xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 md:mb-14 text-center max-w-2xl mx-auto"
      >
        I'm always open to new connections and opportunities. Here's how you can reach me:
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
      >
        <Card
          href="https://wa.me/7041175669"
          icon={<WhatsAppSvg />}
          title="Quick Response"
          desc="For immediate inquiries and quick guidance."
        />

        <Card
          href={`mailto:${emailAddress}`}
          icon={<EmailSvg />}
          title="Professional"
          desc="For detailed proposals and formal opportunities."
        />

        <Card
          href="https://www.linkedin.com/in/vivek-parekh-%F0%9F%9A%80%F0%9F%98%8E-03b3572b6"
          icon={<LinkedinIcon />}
          title="Networking"
          desc="Connect to stay updated on my professional journey."
        />
      </motion.div>
    </motion.div>
  );
};

export default ContactPreferences;