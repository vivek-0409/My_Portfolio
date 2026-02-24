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
import QuickViewPanel from './components/QuickViewPanel';
import LearningPhilosophy from './components/LearningPhilosophy';
import Certifications from './components/Certifications';
import CurrentlyLearning from './components/CurrentlyLearning';
import ContactPreferences from './components/ContactPreferences';
import ScrollProgressIndicator from './components/ScrollProgressIndicator';
import SkillsBackground from './components/SkillsBackground';

import { skills, projects, platforms, socialLinks, experienceTimeline, certifications, currentlyLearningItems } from './constants';
import { Project, Skill, Platform, SocialLink as SocialLinkType, ExperienceItem, CertificationItem, LearningItem } from './types';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-cool-gray overflow-x-hidden relative bg-dark-navy">
      {/* Scroll Progress Indicator */}
      <ScrollProgressIndicator />

      {/* Navigation bar at the top */}
      <Navbar />

      {/* Quick View Panel (fixed at bottom-left) */}
      <QuickViewPanel />

      {/* Main content area with improved responsive layout */}
      <main className="w-full">
        {/* Hero section - full width */}
        <Hero />

        {/* Content sections with flexible container */}
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
          <div className="max-w-[90rem] mx-auto">
            {/* About Me section */}
            <Section id="about" title="About Me">
              <About />
            </Section>

            {/* Learning Philosophy section */}
            <Section id="philosophy" title="My Learning Philosophy">
              <LearningPhilosophy />
            </Section>

            {/* Skills and Expertise section */}
            <Section id="skills" title="My Skills & Expertise" background={<SkillsBackground />}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                {skills.map((skill: Skill, index: number) => (
                  <SkillCard key={index} skill={skill} delay={index * 0.1} />
                ))}
              </div>
            </Section>

            {/* Projects section */}
            <Section id="projects" title="My Projects">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
                {projects.map((project: Project, index: number) => (
                  <ProjectCard key={index} project={project} delay={index * 0.1} />
                ))}
              </div>
            </Section>

            {/* Experience Platforms section */}
            <Section id="platforms" title="Experience Platforms">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                {platforms.map((platform: Platform, index: number) => (
                  <PlatformCard key={index} platform={platform} delay={index * 0.1} />
                ))}
              </div>
            </Section>

            {/* Certifications & Achievements section */}
            <Section id="certifications" title="Certifications & Achievements">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                {certifications.map((cert: CertificationItem, index: number) => (
                  <Certifications
                    key={index}
                    certification={cert}
                    delay={index * 0.1}
                    className={cert.featured ? 'lg:col-span-1 lg:row-span-1 border-neon-cyan ring-1 ring-neon-cyan' : ''}
                  />
                ))}
              </div>

              {/* View All Button */}
              <div className="flex justify-center mt-8 md:mt-12">
                <a
                  href="https://drive.google.com/drive/folders/1M-iOiCXMz2f9sBS-Lm3CWdi3nBb3a49o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-transparent border-2 border-neon-cyan text-neon-cyan px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-neon-cyan/10 hover:scale-105 transition-all duration-300 font-semibold text-sm sm:text-base"
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
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                {socialLinks.map((link: SocialLinkType, index: number) => (
                  <div key={index} className="w-full sm:w-auto flex justify-center">
                    <SocialLink link={link} delay={index * 0.1} />
                  </div>
                ))}
              </div>
            </Section>

            {/* Contact Preferences section */}
            <Section id="contact-prefs" title="Contact Preferences">
              <ContactPreferences />
            </Section>
          </div>
        </div>
      </main>

      {/* Fixed WhatsApp Contact Button */}
      <WhatsAppButton />

      {/* Footer with copyright information */}
      <footer className="w-full bg-dark-navy border-t border-white/10 py-6 sm:py-8 px-4 text-center">
        <p className="text-cool-gray text-xs sm:text-sm md:text-base">&copy; {new Date().getFullYear()} Vivek Parekh. Built with passion & AI.</p>
      </footer>
    </div>
  );
};

export default App;