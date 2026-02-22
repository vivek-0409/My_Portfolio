import React, { useState, useEffect } from 'react';
import { ExperienceItem } from '../types';

interface ExperienceJourneyProps {
  timeline: ExperienceItem[];
}

const ExperienceJourney: React.FC<ExperienceJourneyProps> = ({ timeline }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Vertical line for the timeline */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-cool-gray/30 hidden md:block"></div>

      {timeline.map((item, index) => (
        <div
          key={index}
          className={`mb-8 flex items-center w-full animate-slideInUp ${
            index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
          }`}
          style={{ animationDelay: `${0.2 + index * 0.1}s` }}
        >
          {/* Content for left side on desktop (even items) */}
          <div className="hidden md:block w-1/2">
            {index % 2 === 0 && (
              <div className="text-right pr-8">
                <div className="bg-[#1A263D] p-4 rounded-lg shadow-lg hover:shadow-xl ring-2 ring-transparent transition-all duration-300 ease-in-out transform hover:scale-[1.02] group hover:ring-neon-cyan ring-offset-2 ring-offset-dark-navy">
                  <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-cool-gray text-sm">{item.description}</p>
                </div>
              </div>
            )}
          </div>

          {/* Timeline dot */}
          <div className="relative z-10 w-8 h-8 rounded-full bg-neon-cyan flex items-center justify-center shrink-0">
            <span className="text-dark-navy text-sm font-bold">{item.year.slice(-2)}</span>
          </div>

          {/* Content for right side on desktop (odd items) and always on mobile */}
          <div className="w-full md:w-1/2 pl-8">
            {(index % 2 !== 0 || isMobile) && (
              <div className="bg-[#1A263D] p-4 rounded-lg shadow-lg hover:shadow-xl ring-2 ring-transparent transition-all duration-300 ease-in-out transform hover:scale-[1.02] group hover:ring-neon-cyan ring-offset-2 ring-offset-dark-navy">
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-cool-gray text-sm">{item.description}</p>
                {isMobile && <span className="text-ice-cyan text-xs mt-2 block">{item.year}</span>} {/* Show year on mobile */}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceJourney;