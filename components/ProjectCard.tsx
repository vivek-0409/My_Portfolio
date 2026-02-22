import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{
        y: -10,
        scale: 1.02,
        backgroundColor: "rgba(30, 41, 59, 1)", // slightly lighter
        boxShadow: "0 20px 25px -5px rgba(34, 211, 238, 0.1), 0 10px 10px -5px rgba(34, 211, 238, 0.04)"
      }}
      className="bg-slate-800/50 p-6 rounded-2xl shadow-lg border border-white/5 backdrop-blur-sm group cursor-pointer relative overflow-hidden"
    >
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Project Image */}
      {project.image && (
        <div className="w-full h-48 mb-6 overflow-hidden rounded-xl relative">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-300" />
        </div>
      )}

      <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300 relative z-10">
        {project.name}
      </h4>
      <p className="text-slate-400 mb-6 relative z-10 line-clamp-3">{project.description}</p>

      {/* Project Impact Section */}
      <div className="mb-6 space-y-3 relative z-10 bg-slate-900/50 p-4 rounded-lg border border-white/5">
        {project.problem && (
          <p className="text-slate-400 text-sm">
            <span className="font-semibold text-ice-cyan">Problem:</span> {project.problem}
          </p>
        )}
        {project.solution && (
          <p className="text-slate-400 text-sm">
            <span className="font-semibold text-ice-cyan">Solution:</span> {project.solution}
          </p>
        )}
        {project.result && (
          <p className="text-slate-400 text-sm">
            <span className="font-semibold text-ice-cyan">Result:</span> {project.result}
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-6 relative z-10">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium border border-cyan-500/20"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex space-x-4 relative z-10 pt-4 border-t border-white/10">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-neon-cyan transition-colors duration-300 flex items-center gap-2 group/link"
          >
            <svg className="w-5 h-5 group-hover/link:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.83 9.504.475.087.64-.234.64-.582 0-.295-.01-1.077-.015-1.989-2.775.6-3.36-1.334-3.36-1.334-.45-.457-1.09-1.162-1.09-1.162-.89-.614.07-.6.07-.6 1.05.074 1.605 1.08 1.605 1.08.935 1.607 2.44 1.144 3.033.87.096-.677.365-1.144.667-1.407-2.315-.262-4.755-1.157-4.755-5.174 0-1.146.41-2.083 1.085-2.827-.11-.265-.47-1.34.105-2.78 0 0 .88-.283 2.885 1.076.83-.23 1.71-.345 2.59-.35.88.005 1.77.12 2.59.35 2.005-1.359 2.885-1.076 2.885-1.076.575 1.44.215 2.515.105 2.78.675.744 1.085 1.681 1.085 2.827 0 4.026-2.44 4.908-4.76 5.165.375.327.71.97.71 1.957 0 1.408-.01 2.54-.015 2.884 0 .35.16.674.645.58C19.135 20.198 22 16.442 22 12.017 22 6.484 17.523 2 12 2Z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">GitHub</span>
          </a>
        )}
        {project.liveDemoLink && (
          <a
            href={project.liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-neon-cyan transition-colors duration-300 flex items-center gap-2 group/link"
          >
            <svg className="w-5 h-5 group-hover/link:-translate-y-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M15.75 4.5a3 3 0 11-6 0 3 3 0 016 0zm-6 6a3 3 0 11-6 0 3 3 0 016 0zm0 6a3 3 0 11-6 0 3 3 0 016 0zM17.25 10.5a3 3 0 11-6 0 3 3 0 016 0zM15.75 16.5a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-medium">Live Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;