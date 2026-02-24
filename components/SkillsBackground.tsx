import React, { useEffect, useState, useMemo, useRef } from 'react';

// Tech-themed SVG icons for the background
const Icons = {
    AIBrain: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.48z" />
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.48z" />
        </svg>
    ),
    CodeBrackets: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    ),
    Python: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M11.625 0c-3.1 0-2.91 1.35-2.91 1.35l.01 1.39h2.95v.42H7.55s-2.54-.3-2.54 2.54c0 2.84 2.19 2.74 2.19 2.74h1.31v-1.85s-.04-2.22 2.22-2.22s2.22 2.22 2.22 2.22v3.7s0 2.27-2.22 2.27c-1.39 0-3.66 0-3.66 0s-2.27.13-2.27-2.14V7.63H3.08S0 7.8 0 11.61c0 3.82 2.74 3.7 2.74 3.7h1.64v2.01s-.11 2.37 2.37 2.37c2.48 0 4.14 0 4.14 0s2.32.06 2.32-2.32v-1.39h-2.9v-.43h4.15s2.54.3 2.54-2.54s-2.19-2.74-2.19-2.74H15.8v1.85s.04 2.22-2.22 2.22s-2.22-2.22-2.22-2.22v-3.7s0-2.27 2.22-2.27c1.39 0 3.66 0 3.66 0s2.27-.13 2.27 2.14v2.79h1.79s3.08-.17 3.08-3.98c0-3.81-2.74-3.7-2.74-3.7h-1.64V2.37S19.57 0 17.09 0h-5.465zM8.36 1.83c.45 0 .82.37.82.82c0 .45-.37.82-.82.82s-.82-.37-.82-.82c0-.45.37-.82.82-.82zm7.28 18.51c.45 0 .82.37.82.82c0 .45-.37.82-.82.82s-.82-.37-.82-.82c0-.45.37-.82.82-.82z" />
        </svg>
    ),
    AutomationServer: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <path d="M8 21h8M12 17v4M7 8l2-2 2 2M17 8l-2-2-2 2" />
        </svg>
    ),
    SQLDatabase: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
    ),
    DataStack: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <path d="m21 8-9-4-9 4 9 4 9-4Z" />
            <path d="m3 12 9 4 9-4" />
            <path d="m3 16 9 4 9-4" />
        </svg>
    ),
    APICloud: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <path d="M17.5 19a3.5 3.5 0 0 1-7-1.12c-.22.02-.45.03-.68.03a3.5 3.5 0 0 1-3.5-3.5c0-1.55 1.01-2.86 2.4-3.31a6.5 6.5 0 0 1 12.3-2.1z" />
            <path d="M12 11v6" />
        </svg>
    ),
    Performance: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
    ),
    ChipProcessor: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
            <rect x="9" y="9" width="6" height="6" />
            <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
        </svg>
    ),
    WebGlobe: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    ),
    N8N: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
            <path d="M12 2v20M2 12h20" />
            <path d="M12 12l5-5M12 12l-5 5" />
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
};

const SkillsBackground: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 40;
            const y = (clientY / window.innerHeight - 0.5) * 40;
            setMousePos({ x, y });
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const iconEntries = useMemo(() => Object.entries(Icons), []);

    // Config for orbit animation
    const iconConfigs = useMemo(() => {
        const count = isMobile ? 8 : iconEntries.length;
        const colors = [
            '#00f2ff', // Cyan
            '#bf00ff', // Purple
            '#ff8c00', // Orange
            '#00ffcc', // Teal
            '#0066ff', // Blue
            '#f0abfc', // Pink/light purple
        ];
        return Array.from({ length: count }).map((_, i) => ({
            radius: isMobile ? (35 + (i % 3) * 10) : (55 + (i % 4) * 12), // vh
            duration: 45 + Math.random() * 40,
            delay: -Math.random() * 40,
            startAngle: (i * (360 / count)) + (Math.random() * 20),
            floatDuration: 6 + Math.random() * 4,
            floatDelay: -Math.random() * 10,
            size: isMobile ? 48 : 64, // Bigger for glass circle
            iconSize: isMobile ? 22 : 30,
            opacity: 0.6 + Math.random() * 0.3,
            glowColor: colors[i % colors.length],
            tilt: -15 + Math.random() * 30, // degrees
        }));
    }, [isMobile, iconEntries.length]);

    const rings = useMemo(() => [
        { size: isMobile ? '70vh' : '110vh', duration: '60s', opacity: 0.05 },
        { size: isMobile ? '85vh' : '130vh', duration: '90s', opacity: 0.03, reverse: true },
        { size: isMobile ? '100vh' : '150vh', duration: '120s', opacity: 0.02 },
    ], [isMobile]);

    return (
        <div
            ref={containerRef}
            className="skills-orbit-background absolute inset-0 overflow-hidden pointer-events-none z-0 select-none bg-dark-navy/50"
        >
            <style>
                {`
                @keyframes orbit {
                    from { transform: rotate(0deg) translateX(var(--radius)) rotate(0deg); }
                    to { transform: rotate(360deg) translateX(var(--radius)) rotate(-360deg); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(var(--tilt)); }
                    50% { transform: translateY(-15px) rotate(calc(var(--tilt) + 3deg)); }
                }
                @keyframes premium-pulse {
                    0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px var(--glow-color)); }
                    50% { transform: scale(1.05); filter: drop-shadow(0 0 15px var(--glow-color)); }
                }
                @keyframes core-pulse {
                    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; filter: blur(30px) brightness(1); }
                    50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; filter: blur(40px) brightness(1.5); }
                }
                @keyframes rotate-slow {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
                @keyframes particles {
                    0% { transform: translateY(0); opacity: 0; }
                    50% { opacity: 0.5; }
                    100% { transform: translateY(-100vh); opacity: 0; }
                }

                .orbit-container {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0;
                    height: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.2s ease-out;
                }
                .orbit-icon {
                    position: absolute;
                    animation: orbit var(--duration) linear infinite;
                    animation-delay: var(--delay);
                    pointer-events: auto;
                    cursor: pointer;
                    z-index: 10;
                }
                .icon-wrapper {
                    animation: float var(--float-duration) ease-in-out infinite;
                    animation-delay: var(--float-delay);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                }
                .premium-glass-card {
                    background: rgba(15, 23, 42, 0.4);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    border-radius: 50%;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 8px;
                    box-shadow: 
                        0 4px 20px rgba(0, 0, 0, 0.5),
                        inset 0 0 15px rgba(255, 255, 255, 0.05);
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    animation: premium-pulse 4s ease-in-out infinite;
                }
                .premium-glass-card::before {
                    content: '';
                    position: absolute;
                    inset: -2px;
                    border-radius: 50%;
                    padding: 2px;
                    background: linear-gradient(135deg, var(--glow-color), transparent 60%, var(--glow-color));
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0.6;
                }
                .glass-halo {
                    position: absolute;
                    inset: -5px;
                    border-radius: 50%;
                    background: var(--glow-color);
                    filter: blur(10px);
                    opacity: 0.15;
                    transition: opacity 0.5s ease;
                }
                .orbit-icon:hover .premium-glass-card {
                    transform: scale(1.25);
                    background: rgba(15, 23, 42, 0.7);
                    border-color: var(--glow-color);
                    box-shadow: 
                        0 0 35px var(--glow-color),
                        inset 0 0 20px var(--glow-color);
                    opacity: 1 !important;
                }
                .orbit-icon:hover .glass-halo {
                    opacity: 0.5;
                    filter: blur(15px);
                }
                .ai-core {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 120px;
                    height: 120px;
                    background: radial-gradient(circle, #22d3ee 0%, #0891b2 40%, rgba(8, 145, 178, 0) 70%);
                    border-radius: 50%;
                    z-index: 5;
                    animation: core-pulse 4s ease-in-out infinite;
                    pointer-events: none;
                    box-shadow: 0 0 60px rgba(34, 211, 238, 0.4);
                }
                .orbit-ring {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    border: 1px solid rgba(34, 211, 238, 0.15);
                    border-radius: 50%;
                    pointer-events: none;
                }
                .particle {
                    position: absolute;
                    background: white;
                    border-radius: 50%;
                    pointer-events: none;
                    animation: particles var(--duration) linear infinite;
                }
                `}
            </style>

            {/* Particle background */}
            <div className="absolute inset-0 opacity-20">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={`particle-${i}`}
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            bottom: `-10px`,
                            width: `${Math.random() * 3}px`,
                            height: `${Math.random() * 3}px`,
                            '--duration': `${15 + Math.random() * 20}s`,
                            animationDelay: `${-Math.random() * 20}s`,
                        } as React.CSSProperties}
                    />
                ))}
            </div>

            {/* NVIDIA-style orbital rings */}
            {rings.map((ring, i) => (
                <div
                    key={`ring-${i}`}
                    className="orbit-ring"
                    style={{
                        width: ring.size,
                        height: ring.size,
                        opacity: ring.opacity,
                        animation: `rotate-slow ${ring.duration} linear infinite ${ring.reverse ? 'reverse' : ''}`,
                    } as React.CSSProperties}
                />
            ))}

            {/* AI Core */}
            <div className="ai-core" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-neon-cyan/10 rounded-full blur-3xl" />

            {/* Orbiting Icons */}
            <div
                className="absolute inset-0"
                style={{
                    transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
                    transition: 'transform 0.5s cubic-bezier(0.2, 0, 0.2, 1)',
                }}
            >
                {iconConfigs.map((config, index) => {
                    const [name, Icon] = iconEntries[index % iconEntries.length];
                    return (
                        <div
                            key={`${name}-${index}`}
                            className="orbit-container"
                        >
                            <div
                                className="orbit-icon"
                                style={{
                                    '--radius': `${config.radius}vh`,
                                    '--duration': `${config.duration}s`,
                                    '--delay': `${config.delay}s`,
                                    '--glow-color': config.glowColor,
                                } as React.CSSProperties}
                            >
                                <div
                                    className="icon-wrapper"
                                    style={{
                                        '--float-duration': `${config.floatDuration}s`,
                                        '--float-delay': `${config.floatDelay}s`,
                                        '--tilt': `${config.tilt}deg`,
                                        opacity: config.opacity,
                                        width: config.size,
                                        height: config.size,
                                    } as React.CSSProperties}
                                >
                                    <div className="glass-halo" />
                                    <div className="premium-glass-card">
                                        <div
                                            style={{
                                                width: config.iconSize,
                                                height: config.iconSize,
                                                color: config.glowColor,
                                                filter: `drop-shadow(0 0 8px ${config.glowColor}80)`
                                            }}
                                        >
                                            <Icon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Vignette effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,25,47,0.4)_100%)]" />
        </div>
    );
};

export default SkillsBackground;
