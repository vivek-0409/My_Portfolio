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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay, duration: 0.6, type: 'spring', stiffness: 100 }}
      whileHover={{
        y: -12,
        scale: 1.03,
        boxShadow: "0 30px 50px -10px rgba(34, 211, 238, 0.3)",
      }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer h-full"
    >
      {/* Background with gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-900/50 to-dark-navy/60 backdrop-blur-xl border border-white/10 transition-all duration-300" />
      
      {/* Animated glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 via-transparent to-accent-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Animated rotating gradient background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-32 -right-32 w-64 h-64 bg-neon-cyan/5 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 p-5 md:p-7 h-full flex flex-col">
        {/* Project Image */}
        {project.image && (
          <motion.div 
            className="w-full h-40 md:h-48 mb-5 md:mb-6 overflow-hidden rounded-xl relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <motion.img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/60 via-transparent to-transparent group-hover:from-dark-navy/40 transition-colors duration-300" />
          </motion.div>
        )}

        {/* Title */}
        <motion.h4 
          className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 flex items-center gap-2 group-hover:text-neon-cyan transition-colors duration-300"
          whileHover={{ x: 3 }}
        >
          <span className="text-neon-cyan text-lg">→</span>
          {project.name}
        </motion.h4>

        {/* Description */}
        <p className="text-slate-300 text-sm md:text-base mb-4 md:mb-5 line-clamp-2 group-hover:text-slate-200 transition-colors duration-300">
          {project.description}
        </p>

        {/* Project Impact Section */}
        <motion.div 
          className="mb-4 md:mb-6 space-y-2 md:space-y-3 bg-gradient-to-br from-slate-900/60 to-slate-800/40 p-4 md:p-5 rounded-xl border border-neon-cyan/20 group-hover:border-neon-cyan/40 transition-all duration-300"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {project.problem && (
            <motion.p 
              className="text-slate-300 text-xs md:text-sm"
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.1 }}
            >
              <span className="font-semibold text-neon-cyan">⚡ Problem:</span> {project.problem}
            </motion.p>
          )}
          {project.solution && (
            <motion.p 
              className="text-slate-300 text-xs md:text-sm"
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.15 }}
            >
              <span className="font-semibold text-ice-cyan">💡 Solution:</span> {project.solution}
            </motion.p>
          )}
          {project.result && (
            <motion.p 
              className="text-slate-300 text-xs md:text-sm"
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.2 }}
            >
              <span className="font-semibold text-accent-blue">✓ Result:</span> {project.result}
            </motion.p>
          )}
        </motion.div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-5 md:mb-6 flex-1">
          {project.technologies.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: delay + index * 0.08,
                type: 'spring',
                stiffness: 180,
              }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="bg-gradient-to-r from-neon-cyan/20 to-ice-cyan/10 text-ice-cyan px-2.5 md:px-3 py-1 rounded-full text-xs font-medium border border-neon-cyan/30 hover:border-neon-cyan/60 hover:from-neon-cyan/30 transition-all duration-300"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 md:gap-4 pt-4 md:pt-5 border-t border-white/10">
          {project.githubLink && (
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-neon-cyan transition-colors duration-300 flex items-center gap-1.5 md:gap-2 group/link text-sm md:text-base font-medium"
            >
              <svg className="w-4 md:w-5 h-4 md:h-5 group-hover/link:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.83 9.504.475.087.64-.234.64-.582 0-.295-.01-1.077-.015-1.989-2.775.6-3.36-1.334-3.36-1.334-.45-.457-1.09-1.162-1.09-1.162-.89-.614.07-.6.07-.6 1.05.074 1.605 1.08 1.605 1.08.935 1.607 2.44 1.144 3.033.87.096-.677.365-1.144.667-1.407-2.315-.262-4.755-1.157-4.755-5.174 0-1.146.41-2.083 1.085-2.827-.11-.265-.47-1.34.105-2.78 0 0 .88-.283 2.885 1.076.83-.23 1.71-.345 2.59-.35.88.005 1.77.12 2.59.35 2.005-1.359 2.885-1.076 2.885-1.076.575 1.44.215 2.515.105 2.78.675.744 1.085 1.681 1.085 2.827 0 4.026-2.44 4.908-4.76 5.165.375.327.71.97.71 1.957 0 1.408-.01 2.54-.015 2.884 0 .35.16.674.645.58C19.135 20.198 22 16.442 22 12.017 22 6.484 17.523 2 12 2Z" clipRule="evenodd" />
              </svg>
              <span className="hidden sm:inline">GitHub</span>
            </motion.a>
          )}
          {project.liveDemoLink && (
            <motion.a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-neon-cyan transition-colors duration-300 flex items-center gap-1.5 md:gap-2 group/link text-sm md:text-base font-medium"
            >
              <svg className="w-4 md:w-5 h-4 md:h-5 group-hover/link:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="hidden sm:inline">Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>

      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border-2 border-transparent bg-gradient-to-r from-neon-cyan via-transparent to-ice-cyan"
        initial={{ opacity: 0 }}
      />
    </motion.div>
  );
};

export default ProjectCard;