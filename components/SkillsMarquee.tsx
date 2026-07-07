import React from 'react';
import {
  VSCodeIcon,
  ChatGPTIcon,
  PythonIcon,
  DjangoIcon,
  FlaskIcon,
  MongoDBIcon,
  PostgreSQLIcon,
  RedisIcon,
  GitIcon,
  GitHubIcon,
  ReactIcon,
  JavaScriptIcon,
  HTMLIcon,
  CSSIcon,
  BootstrapIcon,
  TailwindIcon,
  NodejsIcon,
  StreamlitIcon,
  TensorFlowIcon
} from './TechIcons';

interface TechItem {
  name: string;
  Icon: React.FC<{ className?: string; size?: number }>;
}

const techItems: TechItem[] = [
  { name: 'VS Code', Icon: VSCodeIcon },
  { name: 'ChatGPT', Icon: ChatGPTIcon },
  { name: 'Python', Icon: PythonIcon },
  { name: 'Django', Icon: DjangoIcon },
  { name: 'Flask', Icon: FlaskIcon },
  { name: 'MongoDB', Icon: MongoDBIcon },
  { name: 'PostgreSQL', Icon: PostgreSQLIcon },
  { name: 'Redis', Icon: RedisIcon },
  { name: 'Git', Icon: GitIcon },
  { name: 'GitHub', Icon: GitHubIcon },
  { name: 'React', Icon: ReactIcon },
  { name: 'JavaScript', Icon: JavaScriptIcon },
  { name: 'HTML', Icon: HTMLIcon },
  { name: 'CSS', Icon: CSSIcon },
  { name: 'Bootstrap', Icon: BootstrapIcon },
  { name: 'Tailwind CSS', Icon: TailwindIcon },
  { name: 'Node.js', Icon: NodejsIcon },
  { name: 'Streamlit', Icon: StreamlitIcon },
  { name: 'TensorFlow', Icon: TensorFlowIcon },
];

const SkillsMarquee: React.FC = () => {
  // Triple the items to ensure seamless loop with zero gap regardless of screen resolution
  const repeatedItems = [...techItems, ...techItems, ...techItems];

  return (
    <div className="w-full py-6 md:py-10 relative overflow-hidden bg-dark-navy/20 select-none">
      {/* Decorative top and bottom glow dividers */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Left and Right edge fade-out overlays using radial/linear gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-dark-navy via-dark-navy/60 to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-dark-navy via-dark-navy/60 to-transparent pointer-events-none z-10" />

      {/* Marquee inner container with custom CSS infinite animation class */}
      <div className="flex w-[300%] sm:w-[200%] lg:w-[150%] xl:w-full items-center">
        <div 
          className="flex gap-4 md:gap-6 px-4 animate-marquee-left-to-right"
          style={{
            animationPlayState: 'running',
          }}
        >
          {repeatedItems.map((item, index) => {
            const IconComponent = item.Icon;
            return (
              <div
                key={`${item.name}-${index}`}
                className="flex items-center gap-3 px-5 py-3 md:px-7 md:py-4 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.05] hover:border-neon-cyan/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)] group cursor-pointer flex-shrink-0"
              >
                {/* Brand / Technology Icon Wrapper (Only glow and scale, absolutely NO rotation) */}
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 filter drop-shadow-[0_0_2px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
                  <IconComponent className="w-full h-full object-contain" />
                </div>

                {/* Technology Name label */}
                <span className="text-white text-sm md:text-base font-semibold tracking-wide transition-colors duration-300 group-hover:text-neon-cyan select-none">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsMarquee;
