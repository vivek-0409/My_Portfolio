import React from 'react';
import { motion } from 'framer-motion';
import { LinkedinIcon, EmailSvg, WhatsAppSvg } from '../constants';

const ContactPreferences: React.FC = () => {
  const emailAddress = 'your.email@example.com'; // TODO: Replace with your email address

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const Card = ({ href, icon, title, desc, delay }: { href: string | undefined, icon: React.ReactNode, title: string, desc: string, delay?: number }) => (
    <motion.a
      variants={item}
      href={href}
      target={href?.startsWith('http') ? "_blank" : undefined}
      rel={href?.startsWith('http') ? "noopener noreferrer" : undefined}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-slate-800/50 p-6 rounded-2xl shadow-lg border border-white/5 backdrop-blur-sm group cursor-pointer relative overflow-hidden flex flex-col items-center text-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="text-neon-cyan text-4xl mb-4 group-hover:text-ice-cyan transition-colors duration-300 relative z-10 p-3 bg-white/5 rounded-full">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300 relative z-10">
        {title}
      </h4>
      <p className="text-slate-400 text-sm relative z-10 leading-relaxed">{desc}</p>
    </motion.a>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-lg md:text-xl text-slate-400 mb-10 text-center max-w-2xl mx-auto"
      >
        I'm always open to new connections and opportunities. Here's how you can reach me:
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
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
          href="https://www.linkedin.com/in/parekh-vivekkumar-gp-kheda-it-dte-03b3572b6/"
          icon={<LinkedinIcon />}
          title="Networking"
          desc="Connect to stay updated on my professional journey."
        />
      </motion.div>
    </div>
  );
};

export default ContactPreferences;