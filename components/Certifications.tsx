import React from 'react';
import { CertificationItem } from '../types';

interface CertificationsProps {
  certification: CertificationItem;
  delay: number; // Staggered animation delay
  className?: string;
}

const Certifications: React.FC<CertificationsProps> = ({ certification, delay, className = '' }) => {
  return (
    <a
      href={certification.link || '#'}
      target={certification.link ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className={`block p-6 rounded-lg shadow-lg hover:shadow-xl ring-2 ring-transparent transition-all duration-300 ease-in-out transform hover:scale-105 group animate-slideInUp text-center hover:ring-neon-cyan ring-offset-2 ring-offset-dark-navy ${certification.featured ? 'bg-[#233554] border border-neon-cyan/30' : 'bg-[#1A263D]'
        } ${className}`}
      style={{ animationDelay: `${0.2 + delay}s` }}
    >
      {/* Icon for the certification */}
      {certification.icon && (
        <div className={`text-neon-cyan mb-4 mx-auto ${certification.featured ? 'text-6xl' : 'text-5xl'}`}>
          {certification.icon}
        </div>
      )}
      {/* Certification Name */}
      <h4 className={`font-semibold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300 ${certification.featured ? 'text-2xl' : 'text-xl'
        }`}>
        {certification.name}
      </h4>
      {/* Issuer and Year */}
      <p className="text-cool-gray text-sm">{certification.issuer} ({certification.year})</p>

      {/* Description for featured items */}
      {certification.description && (
        <p className="text-cool-gray/80 text-sm mt-2 italic">{certification.description}</p>
      )}

      {/* Optional link indicator */}
      {(certification.link && certification.link !== '#') && (
        <span className="text-ice-cyan text-xs mt-2 block">View Credential</span>
      )}
    </a>
  );
};

export default Certifications;