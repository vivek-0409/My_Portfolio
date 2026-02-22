import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollProgressIndicator: React.FC = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollWidth(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 bg-gradient-to-r from-slate-800 to-slate-900 z-[9999] shadow-lg">
      <motion.div
        className="h-full bg-gradient-to-r from-neon-cyan via-ice-cyan to-accent-blue shadow-lg shadow-neon-cyan/50"
        style={{ width: `${scrollWidth}%` }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
      />
    </div>
  );
};

export default ScrollProgressIndicator;