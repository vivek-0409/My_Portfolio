import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  // Premium developer portfolio titles
  const portfolioTitles = [
    "AI & Automation Developer",
    "Python Developer",
    "IT Student",
    "Vibe Coder",
    "Aspiring AI Engineer",
    "Creative Tech Builder",
    "Intelligent Systems Creator",
    "Future AI Innovator",


  ];

  // Typing animation states
  const [displayText, setDisplayText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  // Real-time typing animation effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentTitle = portfolioTitles[titleIndex];

    if (isWaiting) {
      // Wait 2 seconds before starting to delete
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting) {
      // Delete characters one by one
      if (displayText.length === 0) {
        // Move to next title
        setTitleIndex((prev) => (prev + 1) % portfolioTitles.length);
        setIsDeleting(false);
      } else {
        // Smooth delete animation - 40ms per character
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      }
    } else {
      // Type characters one by one
      if (displayText.length === currentTitle.length) {
        // Typing complete, wait before deleting
        setIsWaiting(true);
      } else {
        // Smooth typing animation - 70ms per character
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 70);
      }
    }


    return () => clearTimeout(timeout);
  }, [displayText, titleIndex, isDeleting, isWaiting, portfolioTitles]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const profileImageVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -10 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 20,
        delay: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
        delay: 0.1,
      },
    },
  };

  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] text-center py-10 md:py-20 lg:py-24 relative overflow-hidden px-4 sm:px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-10 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-neon-cyan/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-accent-blue/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 w-full max-w-6xl mx-auto"
      >
        {/* Header with animated blue background */}
        <div className="hero-bg-wrapper relative w-full">
          <div className="hero-animated-bg"></div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 mb-12 md:mb-16 lg:mb-20 hero-content-wrapper px-6 py-10 md:px-12 md:py-16"
          >
            {/* Profile Image with Professional Blue Animation Background */}
            <motion.div
              variants={profileImageVariants}
              className="flex-shrink-0 relative profile-animation-wrapper"
            >
              {/* Animated Background Container */}
              <style>{`
                .profile-animation-wrapper {
                  perspective: 1000px;
                }

                /* Base animated gradient background */
                .profile-animation-bg {
                  position: absolute;
                  inset: -30%;
                  border-radius: 50%;
                  z-index: 0;
                  opacity: 1;
                  filter: blur(40px);
                }

                /* Primary gradient animation */
                .profile-animation-gradient-1 {
                  position: absolute;
                  inset: -40%;
                  border-radius: 50%;
                  background: radial-gradient(circle at 30% 50%, rgba(34, 211, 238, 0.4), rgba(59, 130, 246, 0.1) 50%, transparent);
                  filter: blur(50px);
                  animation: float-gradient-1 8s ease-in-out infinite;
                  z-index: 0;
                }

                /* Secondary gradient animation */
                .profile-animation-gradient-2 {
                  position: absolute;
                  inset: -35%;
                  border-radius: 50%;
                  background: radial-gradient(circle at 70% 30%, rgba(96, 165, 250, 0.3), rgba(30, 144, 255, 0.05) 45%, transparent);
                  filter: blur(45px);
                  animation: float-gradient-2 10s ease-in-out infinite reverse;
                  z-index: 1;
                }

                /* Tertiary accent gradient */
                .profile-animation-gradient-3 {
                  position: absolute;
                  inset: -25%;
                  border-radius: 50%;
                  background: radial-gradient(circle at 50% 70%, rgba(100, 255, 218, 0.2), transparent 60%);
                  filter: blur(35px);
                  animation: float-gradient-3 12s ease-in-out infinite;
                  z-index: 1;
                }

                /* Smooth moving light sweep effect */
                .profile-animation-light-sweep {
                  position: absolute;
                  inset: -50%;
                  border-radius: 50%;
                  background: linear-gradient(
                    45deg,
                    transparent 0%,
                    rgba(100, 255, 218, 0.15) 25%,
                    rgba(34, 211, 238, 0.1) 50%,
                    transparent 75%
                  );
                  filter: blur(25px);
                  animation: light-sweep 6s ease-in-out infinite;
                  z-index: 2;
                }

                /* Particle container */
                .profile-animation-particles {
                  position: absolute;
                  inset: -60%;
                  z-index: 1;
                  pointer-events: none;
                }

                /* Individual particle styles */
                .particle {
                  position: absolute;
                  width: 2px;
                  height: 2px;
                  background: rgba(100, 255, 218, 0.6);
                  border-radius: 50%;
                  box-shadow: 0 0 6px rgba(34, 211, 238, 0.8);
                }

                .particle:nth-child(1) {
                  top: 20%;
                  left: 10%;
                  animation: float-particle-1 8s ease-in-out infinite;
                }

                .particle:nth-child(2) {
                  top: 30%;
                  right: 15%;
                  animation: float-particle-2 10s ease-in-out infinite;
                }

                .particle:nth-child(3) {
                  bottom: 25%;
                  left: 20%;
                  animation: float-particle-3 9s ease-in-out infinite;
                }

                .particle:nth-child(4) {
                  top: 10%;
                  right: 25%;
                  animation: float-particle-4 11s ease-in-out infinite;
                }

                .particle:nth-child(5) {
                  bottom: 15%;
                  right: 10%;
                  animation: float-particle-5 7s ease-in-out infinite;
                }

                /* Animations */
                @keyframes float-gradient-1 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  50% { transform: translate(40px, -30px) scale(1.1); }
                }

                @keyframes float-gradient-2 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  50% { transform: translate(-50px, 35px) scale(1.15); }
                }

                @keyframes float-gradient-3 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  50% { transform: translate(25px, 25px) scale(0.95); }
                }

                @keyframes light-sweep {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }

                @keyframes float-particle-1 {
                  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
                  50% { transform: translate(60px, -50px) scale(1.5); opacity: 0.8; }
                }

                @keyframes float-particle-2 {
                  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
                  50% { transform: translate(-70px, 40px) scale(1.3); opacity: 0.7; }
                }

                @keyframes float-particle-3 {
                  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
                  50% { transform: translate(45px, 55px) scale(1.2); opacity: 0.9; }
                }

                @keyframes float-particle-4 {
                  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
                  50% { transform: translate(-55px, -45px) scale(1.4); opacity: 0.75; }
                }

                @keyframes float-particle-5 {
                  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.35; }
                  50% { transform: translate(50px, 50px) scale(1.25); opacity: 0.8; }
                }

                /* Profile image glowing effect on hover */
                .profile-animation-wrapper:hover .profile-animation-gradient-1,
                .profile-animation-wrapper:hover .profile-animation-gradient-2,
                .profile-animation-wrapper:hover .profile-animation-gradient-3 {
                  filter: blur(35px);
                  opacity: 1.1;
                }
              `}</style>

              {/* Animated Background Container */}
              <div className="profile-animation-bg">
                <div className="profile-animation-gradient-1"></div>
                <div className="profile-animation-gradient-2"></div>
                <div className="profile-animation-gradient-3"></div>
                <div className="profile-animation-light-sweep"></div>

                {/* Floating Particles */}
                <div className="profile-animation-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
              </div>

              {/* Main profile image - stays on top */}
              <motion.img
                src="/vivek.jpeg"
                alt="Vivek Parekh"
                className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-3xl shadow-2xl object-cover border-2 border-neon-cyan"
                style={{ zIndex: 10 }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 40px rgba(34, 211, 238, 0.8)",
                  borderColor: "#64FFDA"
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Decorative border animation */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-ice-cyan via-neon-cyan to-accent-blue bg-clip-border p-1 opacity-0"
                style={{ zIndex: 5 }}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Main greeting with animated name */}
            <motion.div
              variants={textVariants}
              className="text-center lg:text-left flex-1"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="font-extrabold text-white mb-4 md:mb-6 tracking-tight leading-tight"
              >
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-300 mb-2 font-medium">
                  Hello, I'm
                </div>
                <motion.span
                  className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gradient drop-shadow-2xl py-2"
                  animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Vivek Parekh
                </motion.span>
              </motion.h2>

              {/* Professional title with background - Dynamic Rotating */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="inline-block mb-8 lg:mb-10 relative group w-full lg:w-auto"
              >
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-ice-cyan via-neon-cyan to-accent-blue rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"
                />

                {/* Typing Animation Container */}
                <div className="relative px-6 py-4 md:px-8 md:py-6 min-h-[5rem] sm:min-h-[6rem] flex items-center justify-center lg:justify-start">
                  <style>{`
                    @keyframes blink {
                      0%, 50% { opacity: 1; }
                      51%, 100% { opacity: 0; }
                    }
                    .typing-cursor {
                      display: inline-block;
                      animation: blink 0.8s infinite;
                      margin-left: 4px;
                      font-weight: bold;
                    }
                  `}</style>

                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-ice-cyan via-blue-400 to-neon-cyan font-bold flex items-center break-words text-center lg:text-left">
                    {displayText}
                    <span className="typing-cursor text-neon-cyan">|</span>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Professional bio - short and concise */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed text-center"
        >
        </motion.p>

        {/* Call-to-action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 flex-wrap"
        >
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 40px rgba(34, 211, 238, 0.8)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-dark-navy bg-neon-cyan shadow-lg hover:shadow-neon-lg transition-all duration-300 overflow-hidden group"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-ice-cyan to-neon-cyan rounded-full opacity-0 group-hover:opacity-100"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
            <span className="relative flex items-center justify-center gap-2">
              View My Work
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </span>
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 30px rgba(34, 211, 238, 0.6)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact-prefs')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-neon-cyan border-2 border-neon-cyan shadow-lg hover:bg-neon-cyan/10 transition-all duration-300 backdrop-blur-sm group relative overflow-hidden"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-accent-blue/20 opacity-0 group-hover:opacity-100"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
            <span className="relative flex items-center justify-center gap-2">
              Contact Me
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </motion.svg>
            </span>
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 30px rgba(96, 165, 250, 0.6)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/My-Resume.pdf';
              link.download = 'Vivek-Parekh-Resume.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="btn-resume-download px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-dark-navy bg-blue-400 shadow-lg hover:shadow-neon-lg transition-all duration-300 overflow-hidden group relative"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full opacity-0 group-hover:opacity-100"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
            <span className="relative flex items-center justify-center gap-2">
              📥 Download Resume
            </span>
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 30px rgba(96, 165, 250, 0.5)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('/My-Resume.pdf', '_blank')}
            className="btn-resume-view px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-blue-400 border-2 border-blue-400 shadow-lg hover:bg-blue-400/10 transition-all duration-300 backdrop-blur-sm group relative overflow-hidden"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-accent-blue/20 opacity-0 group-hover:opacity-100"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
            <span className="relative flex items-center justify-center gap-2">
              📖 View CV
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll indicator with enhanced animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 md:mt-16 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center"
          >
            <p className="text-xs sm:text-sm text-neon-cyan/70 font-medium mb-3">Scroll to explore</p>
            <svg className="w-6 h-6 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;