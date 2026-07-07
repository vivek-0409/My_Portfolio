import React from 'react';

/**
 * Interface for a skill category with a list of skill items.
 */
export interface Skill {
  category: string;
  items: string[];
}

/**
 * Interface for a project, including its name, description, technologies, and links.
 */
export interface Project {
  name: string;
  description: string;
  problem: string; // New field for project impact
  solution: string; // New field for project impact
  result: string; // New field for project impact
  technologies: string[];
  githubLink: string | null;
  liveDemoLink: string | null;
  image?: string; // Optional image path for the project
}

/**
 * Interface for an experience platform, with its name, description, link, and an icon.
 */
export interface Platform {
  name: string;
  description: string;
  link: string;
  icon: React.ReactNode; // Can be a string (emoji) or an SVG component
}

/**
 * Interface for a social media link, including its name, URL, and an icon.
 */
export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode; // An SVG component for the social media icon
}

/**
 * Interface for an item in the experience and learning timeline.
 */
export interface ExperienceItem {
  year: string;
  title: string;
  description: string;
}

/**
 * Interface for a certification or achievement item.
 */
export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  link: string | null;
  icon: React.ReactNode; // Can be a string (emoji) or SVG component
  featured?: boolean;
  image?: string;
  description?: string;
}

/**
 * Interface for a currently learning item.
 */
export interface LearningItem {
  name: string;
  category: string;
}

/**
 * Interface for the Quick View Panel data.
 */
export interface QuickViewData {
  role: string;
  techStack: string;
  availability: string;
}
