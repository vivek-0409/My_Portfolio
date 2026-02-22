import React from 'react';
import { quickViewPanelData } from '../constants'; // Import quick view data

const QuickViewPanel: React.FC = () => {
  return (
    <div
      className="fixed bottom-8 left-8 bg-[#1A263D] p-4 rounded-lg shadow-xl z-40
                 max-w-[200px] text-sm animate-quickPanelSlideIn hidden md:block" // Hidden on small screens
      style={{ animationDelay: '2s' }}
    >
      <h5 className="font-bold text-neon-cyan mb-2">Quick Info:</h5>
      <p className="text-cool-gray mb-1">
        <span className="font-semibold text-white">Role:</span> {quickViewPanelData.role}
      </p>
      <p className="text-cool-gray mb-1">
        <span className="font-semibold text-white">Stack:</span> <span className="text-ice-cyan">{quickViewPanelData.techStack}</span>
      </p>
      <p className="text-cool-gray">
        <span className="font-semibold text-white">Availability:</span> {quickViewPanelData.availability}
      </p>
    </div>
  );
};

export default QuickViewPanel;