import React from 'react';
import { LearningItem } from '../types';

interface CurrentlyLearningProps {
  items: LearningItem[];
}

const CurrentlyLearning: React.FC<CurrentlyLearningProps> = ({ items }) => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-lg text-cool-gray mb-8 animate-slideInUp" style={{ animationDelay: '0.4s' }}>
        I'm constantly expanding my horizons! Here are some areas and technologies I'm currently diving into:
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-cool-gray/20 text-ice-cyan px-6 py-2 rounded-full text-md font-medium
                       hover:bg-neon-cyan/20 hover:text-white transition-all duration-300
                       transform hover:scale-105 animate-slideInUp"
            style={{ animationDelay: `${0.6 + index * 0.1}s` }}
          >
            {item.name} <span className="text-cool-gray/70 text-sm">({item.category})</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentlyLearning;