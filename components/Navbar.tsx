import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'journey' },
    { name: 'Contact', id: 'contact-prefs' },
  ];

  // 1. Smart scroll show/hide behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 80) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down -> hide navbar smoothly
        setIsVisible(false);
      } else {
        // Scrolling up -> show navbar smoothly
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // 2. IntersectionObserver to track active section highlight
  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'skills', 'journey', 'contact-prefs'];
    
    const observerOptions = {
      rootMargin: '-30% 0px -50% 0px', // Trigger when section is in the middle of the viewport
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="sticky top-0 z-50 glass-panel border-b border-white/10 py-3 md:py-4 backdrop-blur-2xl w-full"
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo (Home shortcut) */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          className="text-2xl md:text-3xl font-extrabold text-gradient cursor-pointer select-none"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          VP
        </motion.h1>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex gap-1 xl:gap-3 items-center">
          {navItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
            >
              <motion.button
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`transition-colors duration-300 relative text-sm xl:text-base font-semibold px-4 py-2 rounded-xl ${
                  activeSection === item.id 
                    ? 'text-neon-cyan bg-white/5 shadow-inner' 
                    : 'text-cool-gray hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}

                {/* Sliding glow underline animation on active item */}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeNavLine"
                    className="absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-neon-cyan to-ice-cyan rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg
            className={`w-6 h-6 text-white transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="lg:hidden absolute top-full left-4 right-4 mt-3 bg-slate-950/95 backdrop-blur-3xl rounded-2xl border border-white/10 p-5 shadow-2xl z-50 overflow-hidden"
          >
            <ul className="space-y-1.5">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <motion.button
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left transition-all duration-300 px-5 py-3.5 rounded-xl font-semibold text-base ${
                      activeSection === item.id 
                        ? 'text-neon-cyan bg-white/5 border-l-4 border-neon-cyan pl-6' 
                        : 'text-cool-gray hover:text-white hover:bg-white/5 border-l-4 border-transparent'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;