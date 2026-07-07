import React, { useEffect, useState } from 'react';

const SkillsBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      // Soft parallax movement factor (very lightweight)
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none bg-dark-navy/20">
      <style>
        {`
        @keyframes subtle-scale {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.25; }
          50% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.4; }
        }
        @keyframes slow-drift-1 {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(30px, -20px); }
        }
        @keyframes slow-drift-2 {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(-40px, 30px); }
        }
        @keyframes ambient-particles {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          50% { opacity: 0.3; }
          100% { transform: translateY(-80px) scale(1.2); opacity: 0; }
        }
        .bg-glow-halo {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 50vw;
          height: 50vw;
          max-width: 600px;
          max-height: 600px;
          background: radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, rgba(59, 130, 246, 0.04) 50%, transparent 70%);
          border-radius: 50%;
          animation: subtle-scale 12s ease-in-out infinite;
          filter: blur(40px);
        }
        .drift-glow-blue {
          position: absolute;
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(50px);
          animation: slow-drift-1 15s ease-in-out infinite;
        }
        .drift-glow-cyan {
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(34, 211, 238, 0.07) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(40px);
          animation: slow-drift-2 18s ease-in-out infinite;
        }
        .ambient-spark {
          position: absolute;
          background: rgba(34, 211, 238, 0.4);
          box-shadow: 0 0 8px rgba(34, 211, 238, 0.6);
          border-radius: 50%;
          animation: ambient-particles var(--dur) linear infinite;
        }
        `}
      </style>

      {/* Static deep premium radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(15,23,42,0.6)_0%,transparent_100%)]" />

      {/* Parallax ambient glows that react gently to mouse position */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
        }}
      >
        {/* Soft floating colored dust clouds */}
        <div className="drift-glow-blue top-[10%] left-[15%]" />
        <div className="drift-glow-cyan bottom-[15%] right-[20%]" />
        <div className="drift-glow-blue bottom-[10%] left-[25%]" />
      </div>

      {/* Central subtle pulsing core aura */}
      <div className="bg-glow-halo" />

      {/* Ambient lightweight particle overlays (high performance) */}
      <div className="absolute inset-0 opacity-40">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`spark-${i}`}
            className="ambient-spark"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              '--dur': `${10 + Math.random() * 10}s`,
              animationDelay: `${-Math.random() * 10}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Vignette mask around outer edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(15,23,42,0.8)_100%)]" />
    </div>
  );
};

export default SkillsBackground;
