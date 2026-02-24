import React from 'react';
import { Skill, Project, Platform, SocialLink, ExperienceItem, CertificationItem, LearningItem, QuickViewData } from './types';

// SVG Icons for social media links
const GithubIcon: React.FC = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.83 9.504.475.087.64-.234.64-.582 0-.295-.01-1.077-.015-1.989-2.775.6-3.36-1.334-3.36-1.334-.45-.457-1.09-1.162-1.09-1.162-.89-.614.07-.6.07-.6 1.05.074 1.605 1.08 1.605 1.08.935 1.607 2.44 1.144 3.033.87.096-.677.365-1.144.667-1.407-2.315-.262-4.755-1.157-4.755-5.174 0-1.146.41-2.083 1.085-2.827-.11-.265-.47-1.34.105-2.78 0 0 .88-.283 2.885 1.076.83-.23 1.71-.345 2.59-.35.88.005 1.77.12 2.59.35 2.005-1.359 2.885-1.076 2.885-1.076.575 1.44.215 2.515.105 2.78.675.744 1.085 1.681 1.085 2.827 0 4.026-2.44 4.908-4.76 5.165.375.327.71.97.71 1.957 0 1.408-.01 2.54-.015 2.884 0 .35.16.674.645.58C19.135 20.198 22 16.442 22 12.017 22 6.484 17.523 2 12 2Z" clipRule="evenodd" />
  </svg>
);

// Add export for LinkedinIcon
export const LinkedinIcon: React.FC = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5S0 4.881 0 3.5C0 2.12 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM0 22h5V7H0v15zM22 22h-5v-9.46c0-2.2-.09-3.78-2.79-3.78-2.79 0-3.26 2.05-3.26 3.99V22H6.94s.06-13 0-15H12v2.66c.86-1.25 2.13-2.5 4.97-2.5C20.25 7.16 22 9.58 22 12.87V22h.01z" />
  </svg>
);

const InstagramIcon: React.FC = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2c2.716 0 3.056.012 4.12.062 1.064.05 1.79.218 2.428.468.66.254 1.137.603 1.649 1.114.512.511.861.989 1.114 1.649.25.638.418 1.364.468 2.428.05 1.064.062 1.404.062 4.12s-.012 3.056-.062 4.12c-.05 1.064-.218 1.79-.468 2.428-.254.66-.603 1.137-1.114 1.649-.512.511-.861-.989-1.114-1.649-.25-.638-.418-1.364-.468-2.428-.05-1.064-.062-1.404-.062-4.12s.012-3.056.062-4.12c.05-1.064.218-1.79.468-2.428.254-.66.603-1.137 1.114-1.649.511-.512.989-.861 1.649-1.114.638-.25 1.364-.418 2.428-.468C8.944 2.012 9.284 2 12 2zm0 2.22c-2.617 0-2.916.01-3.92.058-1.004.048-1.455.207-1.768.324-.313.116-.54.26-.708.428-.168.168-.312.395-.428.708-.117.313-.276.764-.324 1.768-.048 1.004-.058 1.303-.058 3.92s.01 2.916.058 3.92c.048 1.004.207 1.455.324 1.768.116.313.26.54.428.708.168.168.395.312.708.428.313.117.764.276 1.768.324 1.004.048 1.303.058 3.92.058s2.916-.01 3.92-.058c1.004-.048 1.455-.207 1.768-.324.313-.116.54-.26.708-.428.168-.168.312-.395.428-.708.117-.313.276-.764.324-1.768.048-1.004.058-1.303.058-3.92s-.01-2.916-.058-3.92c-.048-1.004-.207-1.455-.324-1.768-.116-.313-.26-.54-.428-.708-.168-.168-.395-.312-.708-.428-.313-.117-.764-.276-1.768-.324-1.004-.048-1.303-.058-3.92-.058zm0 2.492c2.268 0 4.108 1.84 4.108 4.108S14.268 14.82 12 14.82s-4.108-1.84-4.108-4.108S9.732 5.712 12 5.712zm0 1.908c-1.218 0-2.2.982-2.2 2.2s.982 2.2 2.2 2.2 2.2-.982 2.2-2.2-.982-2.2-2.2-2.2zm6.27-2.827a1.46 1.46 0 100 2.92 1.46 1.46 0 000-2.92z" />
  </svg>
);

const WhatsAppIcon: React.FC = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C7.38 2 3.59 5.79 3.59 10.45c0 1.57.41 3.1.96 4.49L2 22l7.39-2.02c1.32.73 2.82 1.12 4.09 1.12 4.66 0 8.45-3.79 8.45-8.45S16.7 2 12.04 2zM17.47 16.57c-.2-.09-1.2-.59-1.39-.66-.18-.08-.32-.1-.45.08-.13.17-.5.66-.61.79-.11.13-.23.15-.43.05-.2-.1-.85-.31-1.62-.99-.6-.53-1-1.2-1.12-1.39-.12-.18-.02-.17.13-.29.15-.12.32-.28.45-.45.1-.13.14-.23.18-.31.04-.09.02-.17-.01-.36-.04-.18-.39-.94-.54-1.29-.14-.34-.29-.29-.45-.29h-.38c-.13 0-.34.05-.53.25-.19.2-.72.7-.72 1.71 0 1.01.74 1.97.84 2.11.11.14 1.4 2.15 3.39 2.99.49.21.87.33 1.17.42.47.14.6.11.83.07.24-.04 1.2-.49 1.4-.97.2-.49.2-.9.14-.99-.05-.08-.19-.13-.39-.22z" />
  </svg>
);

const EmailIcon: React.FC = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
  </svg>
);


/**
 * Array of skills categorized by area of expertise.
 */
export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Java', 'Go'],
  },
  {
    category: 'AI / Machine Learning',
    items: ['AI / ML Concepts', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision', 'Generative AI (Gemini API)'],
  },
  {
    category: 'Automation & Workflow',
    items: ['Automation Concepts', 'n8n', 'Robotic Process Automation (RPA)', 'API Integrations', 'Data Orchestration'],
  },
  {
    category: 'Web Frameworks & Tools',
    items: ['React', 'Streamlit', 'Node.js', 'Express.js', 'Django', 'Flask', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Google Cloud Platform (GCP)', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Git', 'Terraform'],
  },
  {
    category: 'Database & APIs',
    items: ['SQL (PostgreSQL, MySQL)', 'NoSQL (MongoDB)', 'RESTful APIs', 'GraphQL', 'Microservices Architecture'],
  },
];

/**
 * Array of featured projects with descriptions, technologies, and links.
 */
export const projects: Project[] = [
  {
    name: 'Mood-Wave_AI',
    description: 'An AI-powered system for detecting human emotions from audio and visual cues.',
    problem: 'Understanding human emotions accurately in real-time is complex and vital for enhanced human-computer interaction.',
    solution: 'Designed a multi-modal emotion recognition system using deep learning models to analyze speech patterns and facial expressions.',
    result: 'Improved emotion detection accuracy significantly, enabling more empathetic and responsive AI interactions.',
    technologies: ['Python', 'Deep Learning', 'Speech Recognition', 'OpenCV'],
    githubLink: 'https://github.com/vivek-0409/Mood-Wave_AI',
    liveDemoLink: null,
    image: '/projects/mood-wave-ai.png',
  },
  {
    name: 'Caneda_GDP',
    description: 'Comprehensive analysis and visualization of Canadian GDP data.',
    problem: 'Economic data can be dense and difficult to interpret without clear visualization and context.',
    solution: 'Developed a data analysis project focused on Canada\'s GDP, utilizing statistical methods to identify trends and growth factors.',
    result: 'Provided clear insights into economic performance, aiding in data-driven decision making and financial forecasting.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Data Analysis'],
    githubLink: 'https://github.com/vivek-0409/Caneda_GDP',
    liveDemoLink: null,
    image: '/projects/canada-gdp.png',
  },
  {
    name: 'AI-Health-Agent',
    description: 'An intelligent agent designed to assist with healthcare related queries and tasks.',
    problem: 'Accessing reliable medical information and navigating healthcare processes can be overwhelming for patients.',
    solution: 'Built an AI health agent capable of answering medical queries, scheduling appointments, and monitoring health metrics.',
    result: 'Streamlined patient interaction with healthcare services, reducing wait times and improving accessibility to medical advice.',
    technologies: ['Python', 'NLP', 'Healthcare AI', 'Chatbot'],
    githubLink: 'https://github.com/vivek-0409/AI-Health-Agent',
    liveDemoLink: null,
    image: '/projects/ai-health-agent.png',
  },
  {
    name: 'Face Detection System',
    description: 'Real-time face detection application using Deep Face and Streamlit.',
    problem: 'Reliable and fast face detection is essential for security and user authentication systems.',
    solution: 'Implemented a robust face detection system using the Deep Face library and accessible via a Streamlit web interface.',
    result: 'Achieved high-speed detection rates with real-time processing capabilities, suitable for security applications.',
    technologies: ['Python', 'Deep Face', 'Streamlit', 'Computer Vision'],
    githubLink: 'https://github.com/vivek-0409/face-Detection-_Using_Deep_Face_streamlit_V',
    liveDemoLink: null,
    image: '/projects/face-detection.png',
  },
];

/**
 * Array of experience platforms.
 */
export const platforms: Platform[] = [
  {
    name: 'Kaggle',
    description: 'Hands-on learning and real-world experimentation in data science competitions.',
    link: 'https://www.kaggle.com/yourusername',
    icon: '📊', // Unicode emoji
  },
  {
    name: 'VS Code',
    description: 'My primary IDE for efficient and versatile development across various projects.',
    link: 'https://code.visualstudio.com/',
    icon: '💻', // Unicode emoji
  },
  {
    name: 'Coursera',
    description: 'Online learning platform for professional development and specialized certifications.',
    link: 'https://www.coursera.org/user/yourusername',
    icon: '🎓', // Unicode emoji
  },
  {
    name: 'Google AI Studio',
    description: 'Experimenting with generative AI models and developing AI-powered applications.',
    link: 'https://aistudio.google.com/',
    icon: '🧠', // Unicode emoji
  },
  {
    name: 'Anti-Gravity',
    description: 'Platform for exploring cutting-edge physics simulations and innovative concepts.',
    link: 'https://www.antigravity.io/', // Placeholder link
    icon: '⚛️', // Unicode emoji
  },
];

/**
 * Array of social media links.
 */
export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/vivek-parekh-%F0%9F%9A%80%F0%9F%98%8E-03b3572b6',
    // Now that LinkedinIcon is exported, we can use it here directly as well,
    // although it's already used in ContactPreferences.tsx.
    icon: <LinkedinIcon />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/vivek-0409',
    icon: <GithubIcon />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/parekh_vivek__?igsh=MTV0ejZlNmVhdjV2aw==',
    icon: <InstagramIcon />,
  },
  {
    name: 'Email',
    url: 'mailto:vivekparekh0409@gmail.com',
    icon: <EmailIcon />,
  },
];

/**
 * Array of items for the Experience & Learning Journey timeline.
 */
export const experienceTimeline: ExperienceItem[] = [
  {
    year: '2020',
    title: 'Began Self-Learning Journey',
    description: 'Started exploring programming fundamentals with Python and diving into data science concepts.',
  },
  {
    year: '2021',
    title: 'Deep Dive into AI & ML',
    description: 'Completed several online certifications in Machine Learning, Deep Learning, and Computer Vision.',
  },
  {
    year: '2022',
    title: 'First Automation Projects',
    description: 'Developed initial automation scripts and workflows to streamline personal and small business tasks.',
  },
  {
    year: '2023',
    title: 'Focus on Generative AI & Web Dev',
    description: 'Explored Google Gemini API, Streamlit, and built interactive web applications to showcase AI capabilities.',
  },
  {
    year: 'Present',
    title: 'Continuous Growth & Collaboration',
    description: 'Actively seeking new challenges, collaborating on open-source projects, and mentoring aspiring developers.',
  },
];

/**
 * Array of certifications and achievements.
 */
export const certifications: CertificationItem[] = [
  {
    name: 'N8N 1st Runner Up',
    issuer: 'N8N',
    year: '2024',
    link: 'https://drive.google.com/drive/folders/1M-iOiCXMz2f9sBS-Lm3CWdi3nBb3a49o',
    icon: '🏆',
    featured: true,
    description: 'Awarded 1st Runner Up in N8N Global Automation Hackathon.',
  },
  {
    name: 'IBM SkillsBuild',
    issuer: 'IBM',
    year: '2024',
    link: 'https://drive.google.com/drive/folders/1M-iOiCXMz2f9sBS-Lm3CWdi3nBb3a49o',
    icon: '💻',
    featured: true,
    description: 'Specialized training in AI and Data Science from IBM.',
  },
  {
    name: 'NICE 25 (Govt. of India)',
    issuer: 'Government of India',
    year: '2023',
    link: 'https://drive.google.com/drive/folders/1M-iOiCXMz2f9sBS-Lm3CWdi3nBb3a49o',
    icon: '🇮🇳',
    featured: true,
    description: 'Recognized by the Government of India for excellence in innovation.',
  },
  {
    name: 'AI Tools Expert',
    issuer: 'be10X',
    year: '2023',
    link: 'https://drive.google.com/drive/folders/1M-iOiCXMz2f9sBS-Lm3CWdi3nBb3a49o',
    icon: '🛠️',
  },
  {
    name: 'Full Stack Development',
    issuer: 'Hidevs',
    year: '2023',
    link: 'https://drive.google.com/drive/folders/1M-iOiCXMz2f9sBS-Lm3CWdi3nBb3a49o',
    icon: '🌐',
  },
  {
    name: 'Kaggle Competitions',
    issuer: 'Kaggle',
    year: '2022-2024',
    link: 'https://drive.google.com/drive/folders/1M-iOiCXMz2f9sBS-Lm3CWdi3nBb3a49o',
    icon: '📊',
  },
  {
    name: 'Web Development',
    issuer: 'DevTown',
    year: '2022',
    link: 'https://drive.google.com/drive/folders/1M-iOiCXMz2f9sBS-Lm3CWdi3nBb3a49o',
    icon: '👨‍💻',
  },
  {
    name: 'Coding Excellence',
    issuer: 'Elite Coders',
    year: '2022',
    link: 'https://drive.google.com/drive/folders/1M-iOiCXMz2f9sBS-Lm3CWdi3nBb3a49o',
    icon: '🚀',
  },
];

/**
 * Array of items currently being learned.
 */
export const currentlyLearningItems: LearningItem[] = [
  { name: 'Reinforcement Learning', category: 'AI' },
  { name: 'Edge AI Deployment', category: 'DevOps' },
  { name: 'Go Language Advanced Topics', category: 'Programming' },
  { name: 'Web3 & Blockchain Basics', category: 'New Tech' },
];

/**
 * Data for the Quick View Panel.
 */
export const quickViewPanelData: QuickViewData = {
  role: 'AI & Automation Developer',
  techStack: 'Python | AI | n8n | Streamlit',
  availability: 'Open to Internship / Collaboration',
};


export const WhatsAppSvg: React.FC = () => <WhatsAppIcon />;
export const EmailSvg: React.FC = () => <EmailIcon />;