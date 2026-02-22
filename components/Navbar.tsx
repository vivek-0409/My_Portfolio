import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Philosophy', id: 'philosophy' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'platforms' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Journey', id: 'journey' },
    { name: 'Contact', id: 'contact-prefs' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 glass-panel border-b border-white/5 py-4"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-gradient cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          VP
        </motion.h1>

        <ul className="flex flex-wrap justify-center space-x-1 sm:space-x-6">
          {navItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-cool-gray hover:text-white transition-colors duration-300 relative group text-sm md:text-base font-medium px-2 py-1"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-neon-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;