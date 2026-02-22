import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import PlatformCard from './components/PlatformCard';
import SocialLink from './components/SocialLink';
import About from './components/About';
import ExperienceJourney from './components/ExperienceJourney';
import WhatsAppButton from './components/WhatsAppButton';
import QuickViewPanel from './components/QuickViewPanel'; // New import
import LearningPhilosophy from './components/LearningPhilosophy'; // New import
import Certifications from './components/Certifications'; // New import
import CurrentlyLearning from './components/CurrentlyLearning'; // New import
import ContactPreferences from './components/ContactPreferences'; // New import
import ScrollProgressIndicator from './components/ScrollProgressIndicator'; // New import

import { skills, projects, platforms, socialLinks, experienceTimeline, certifications, currentlyLearningItems } from './constants'; // Updated imports
import { Project, Skill, Platform, SocialLink as SocialLinkType, ExperienceItem, CertificationItem, LearningItem } from './types'; // Updated types

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-cool-gray overflow-x-hidden relative">
      {/* Scroll Progress Indicator */}
      <ScrollProgressIndicator />

      {/* Navigation bar at the top */}
      <Navbar />

      {/* Quick View Panel (fixed at bottom-left) */}
      <QuickViewPanel />

      {/* Main content area, structured into sections */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero section with a welcoming message and call to action */}
        <Hero />

        {/* About Me section */}
        <Section id="about" title="About Me">
          <About />
        </Section>

        {/* Learning Philosophy section */}
        <Section id="philosophy" title="My Learning Philosophy">
          <LearningPhilosophy />
        </Section>

        {/* Skills and Expertise section */}
        <Section id="skills" title="My Skills & Expertise">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill: Skill, index: number) => (
              <SkillCard key={index} skill={skill} delay={index * 0.1} />
            ))}
          </div>
        </Section>

        {/* Projects section */}
        <Section id="projects" title="My Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project: Project, index: number) => (
              <ProjectCard key={index} project={project} delay={index * 0.1} />
            ))}
          </div>
        </Section>

        {/* Experience Platforms section */}
        <Section id="platforms" title="Experience Platforms">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform: Platform, index: number) => (
              <PlatformCard key={index} platform={platform} delay={index * 0.1} />
            ))}
          </div>
        </Section>

        {/* Certifications & Achievements section */}
        <Section id="certifications" title="Certifications & Achievements">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert: CertificationItem, index: number) => (
              <Certifications
                key={index}
                certification={cert}
                delay={index * 0.1}
                className={cert.featured ? 'lg:col-span-1 lg:row-span-1 border-neon-cyan' : ''}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-8">
            <a
              href="https://drive.google.com/drive/folders/1M-iOiCXMz2f9sBS-Lm3CWdi3nBb3a49o"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border border-neon-cyan text-neon-cyan px-6 py-2 rounded hover:bg-neon-cyan/10 transition-colors duration-300"
            >
              View All Certificates
            </a>
          </div>
        </Section>

        {/* Experience & Learning Journey section */}
        <Section id="journey" title="Experience & Learning Journey">
          <ExperienceJourney timeline={experienceTimeline} />
        </Section>

        {/* Currently Learning section */}
        <Section id="currently-learning" title="Currently Learning">
          <CurrentlyLearning items={currentlyLearningItems} />
        </Section>

        {/* Social Media links section */}
        <Section id="socials" title="Connect With Me">
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link: SocialLinkType, index: number) => (
              <SocialLink key={index} link={link} delay={index * 0.1} />
            ))}
          </div>
        </Section>

        {/* Contact Preferences section */}
        <Section id="contact-prefs" title="Contact Preferences">
          <ContactPreferences />
        </Section>
      </main>

      {/* Fixed WhatsApp Contact Button */}
      <WhatsAppButton />

      {/* Footer with copyright information */}
      <footer className="bg-dark-navy border-t border-cool-gray/20 py-6 text-center text-cool-gray text-sm">
        <p>&copy; {new Date().getFullYear()} Your Name. Built with passion & AI.</p>
      </footer>
    </div>
  );
};

export default App;