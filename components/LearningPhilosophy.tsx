import React from 'react';

const LearningPhilosophy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto text-center space-y-6">
      <p className="text-lg md:text-xl text-cool-gray leading-relaxed animate-slideInUp" style={{ animationDelay: '0.4s' }}>
        My learning philosophy is rooted in a pragmatic, <span className="text-ice-cyan">hands-on approach</span>. I firmly believe that the most profound understanding comes from <span className="text-ice-cyan">building and experimenting</span> with real tools and technologies.
      </p>
      <p className="text-lg md:text-xl text-cool-gray leading-relaxed animate-slideInUp" style={{ animationDelay: '0.6s' }}>
        Instead of merely consuming theoretical knowledge, I prioritize applying concepts immediately to <span className="text-ice-cyan">practical projects</span>. This iterative process of trying, failing, and refining allows me to grasp complexities deeply and develop resilient solutions.
      </p>
      <p className="text-lg md:text-xl text-cool-gray leading-relaxed animate-slideInUp" style={{ animationDelay: '0.8s' }}>
        My goal is always to <span className="text-ice-cyan">improve accuracy and impact</span>, not just speed. I'm driven by a continuous improvement mindset, always seeking feedback and new challenges to evolve my skills as an AI and Automation Developer.
      </p>
    </div>
  );
};

export default LearningPhilosophy;