import React from 'react';
import { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
  delay: number; // Staggered animation delay
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, delay }) => {
  return (
    <div
      className="bg-[#1A263D] p-6 rounded-lg shadow-lg hover:shadow-xl ring-2 ring-transparent transition-all duration-300 ease-in-out transform hover:scale-105 group animate-slideInUp hover:ring-neon-cyan ring-offset-2 ring-offset-dark-navy"
      style={{ animationDelay: `${0.2 + delay}s` }} // Staggered entry animation
    >
      <h4 className="text-2xl font-semibold text-white mb-4 group-hover:text-neon-cyan transition-colors duration-300">
        {skill.category}
      </h4>
      <div className="flex flex-wrap gap-3">
        {skill.items.map((item, index) => (
          <span
            key={index}
            className="bg-cool-gray/20 text-ice-cyan px-4 py-1 rounded-full text-sm font-medium hover:bg-neon-cyan/20 hover:text-white transition-all duration-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;