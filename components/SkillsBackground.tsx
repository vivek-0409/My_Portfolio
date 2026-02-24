import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Tech-themed SVG icons for the background
const Icons = {
    Python: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M11.625 0c-3.1 0-2.91 1.35-2.91 1.35l.01 1.39h2.95v.42H7.55s-2.54-.3-2.54 2.54c0 2.84 2.19 2.74 2.19 2.74h1.31v-1.85s-.04-2.22 2.22-2.22s2.22 2.22 2.22 2.22v3.7s0 2.27-2.22 2.27c-1.39 0-3.66 0-3.66 0s-2.27.13-2.27-2.14V7.63H3.08S0 7.8 0 11.61c0 3.82 2.74 3.7 2.74 3.7h1.64v2.01s-.11 2.37 2.37 2.37c2.48 0 4.14 0 4.14 0s2.32.06 2.32-2.32v-1.39h-2.9v-.43h4.15s2.54.3 2.54-2.54s-2.19-2.74-2.19-2.74H15.8v1.85s.04 2.22-2.22 2.22s-2.22-2.22-2.22-2.22v-3.7s0-2.27 2.22-2.27c1.39 0 3.66 0 3.66 0s2.27-.13 2.27 2.14v2.79h1.79s3.08-.17 3.08-3.98c0-3.81-2.74-3.7-2.74-3.7h-1.64V2.37S19.57 0 17.09 0h-5.465zM8.36 1.83c.45 0 .82.37.82.82c0 .45-.37.82-.82.82s-.82-.37-.82-.82c0-.45.37-.82.82-.82zm7.28 18.51c.45 0 .82.37.82.82c0 .45-.37.82-.82.82s-.82-.37-.82-.82c0-.45.37-.82.82-.82z" />
        </svg>
    ),
    AIBrain: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.48z" />
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.48z" />
        </svg>
    ),
    Automation: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
    ),
    Database: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
    ),
    Data: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
            <path d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
    ),
    N8N: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 18.2c-3.42 0-6.2-2.78-6.2-6.2s2.78-6.2 6.2-6.2 6.2 2.78 6.2 6.2-2.78 6.2-6.2 6.2z" />
        </svg>
    ),
    Vercel: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M24 22.525H0L12 1.475L24 22.525Z" />
        </svg>
    ),
    AntiGravity: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a10 10 0 1 0 10 10" />
            <path d="M12 12l5-5" />
        </svg>
    ),
    VSCode: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M23.15 2.58L17.62 0l-1.06.33L9.05 6.75l-4.29-3.3L0 4.79v14.42l4.76 1.34 4.29-3.3 7.51 6.42 1.06.33 5.53-2.58V2.58zm-7.73 14.72l-4.29-3.3l4.29-3.3v6.6z" />
        </svg>
    ),
    Cursor: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
            <path d="M13 13l6 6" />
        </svg>
    ),
    CodeBrackets: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    ),
    CloudAPI: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <path d="M17.5 19a3.5 3.5 0 0 1-7-1.12c-.22.02-.45.03-.68.03a3.5 3.5 0 0 1-3.5-3.5c0-1.55 1.01-2.86 2.4-3.31a6.5 6.5 0 0 1 12.3-2.1z" />
            <path d="M12 11v6" />
            <path d="M9 14l3 3 3-3" />
        </svg>
    ),
};

const SkillIcon = ({ icon: Icon, delay, initialPos }: { icon: any, delay: number, initialPos: { x: number, y: number }, key?: any }) => {
    return (
        <motion.div
            initial={{
                x: `${initialPos.x}%`,
                y: `${initialPos.y}%`,
                opacity: 0,
                scale: 0
            }}
            animate={{
                opacity: [0, 0.15, 0.15, 0],
                scale: [0.8, 1, 1, 0.8],
                x: [`${initialPos.x}%`, `${initialPos.x + 5}%`, `${initialPos.x - 5}%`, `${initialPos.x}%`],
                y: [`${initialPos.y}%`, `${initialPos.y - 10}%`, `${initialPos.y + 10}%`, `${initialPos.y}%`],
                rotate: [0, 90, 180, 360],
            }}
            transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                delay: delay,
                ease: "linear"
            }}
            className="absolute w-8 h-8 md:w-12 md:h-12 text-neon-cyan/40"
        >
            <Icon />
        </motion.div>
    );
};

const SkillsBackground: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const iconList = Object.values(Icons);
    const displayIcons = isMobile ? iconList.slice(0, 6) : iconList;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
            <AnimatePresence>
                {displayIcons.map((Icon, index) => {
                    // Distributed positions that don't cluster too much
                    const initialPos = {
                        x: (index * (100 / displayIcons.length) + Math.random() * 10) % 100,
                        y: (index * 7 + Math.random() * 50) % 90 + 5,
                    };

                    return (
                        <SkillIcon
                            key={index}
                            icon={Icon}
                            delay={index * 1.5}
                            initialPos={initialPos}
                        />
                    );
                })}
            </AnimatePresence>

            {/* Soft radial gradients for depth */}
            <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient from-neon-cyan/5 via-transparent to-transparent opacity-30" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-radial-gradient from-accent-blue/5 via-transparent to-transparent opacity-30" />
        </div>
    );
};

export default SkillsBackground;
