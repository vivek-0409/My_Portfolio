import React from 'react';
import { Platform } from '../types';

interface PlatformCardProps {
  platform: Platform;
  delay: number; // Staggered animation delay
}

const PlatformCard: React.FC<PlatformCardProps> = ({ platform, delay }) => {
  return (
    <a
      href={platform.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-[#1A263D] p-6 rounded-lg shadow-lg hover:shadow-xl ring-2 ring-transparent transition-all duration-300 ease-in-out transform hover:scale-105 group animate-slideInUp text-center hover:ring-neon-cyan ring-offset-2 ring-offset-dark-navy"
      style={{ animationDelay: `${0.2 + delay}s` }} // Staggered entry animation
    >
      {/* Icon for the platform, centered */}
      {platform.icon && <div className="text-neon-cyan text-5xl mb-4 mx-auto">{platform.icon}</div>}
      {/* Platform name */}
      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300">
        {platform.name}
      </h4>
      {/* Platform description */}
      <p className="text-cool-gray text-sm">{platform.description}</p>
    </a>
  );
};

export default PlatformCard;