import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// 1. VS Code Icon
export const VSCodeIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size = 32 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.15 2.58L17.62 0l-1.06.33L9.05 6.75l-4.29-3.3L0 4.79v14.42l4.76 1.34 4.29-3.3 7.51 6.42 1.06.33 5.53-2.58V2.58zm-7.73 14.72l-4.29-3.3l4.29-3.3v6.6z" fill="#007ACC" />
  </svg>
);

// 2. ChatGPT Icon
export const ChatGPTIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size = 32 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.28 10.1c.14-.94-.2-1.92-.88-2.6a3.86 3.86 0 0 0-5.26-.26 3.86 3.86 0 0 0-4.14-1.96c-.84.14-1.6.6-2.12 1.3a3.86 3.86 0 0 0-1.74 3.7c-.88.24-1.6.82-2.02 1.62a3.86 3.86 0 0 0 .54 4.48c.1.1.22.18.34.26a3.86 3.86 0 0 0 4.38 4.2c.16-.02.32-.08.48-.14a3.86 3.86 0 0 0 5.2.14 3.86 3.86 0 0 0 4.14 1.96c.84-.14 1.6-.6 2.12-1.3A3.86 3.86 0 0 0 23 18.06c.88-.24 1.6-.82 2.02-1.62a3.86 3.86 0 0 0-.54-4.48 3.5 3.5 0 0 0-.34-.26 3.86 3.86 0 0 0-3.86-1.6zm-1.8.64c.26-.06.52-.08.78-.04c.48.06.9.3 1.2.68c.28.38.38.86.28 1.34a2 2 0 0 1-1.04 1.34c-.16.08-.34.14-.52.16v2.24a4.4 4.4 0 0 0 1.22-.38l1.94 1.12a2 2 0 0 1 .28 2.76c-.3.4-.72.64-1.2.68c-.48.06-.96-.1-1.3-.44l-1.94-1.12c-.22.42-.52.78-.9 1.06v2.24a2 2 0 0 1-1.78 1.94c-.5.04-.98-.12-1.32-.46a2 2 0 0 1-.68-1.48v-2.24c-.46.06-.92.02-1.36-.14l-1.94 1.12a2 2 0 0 1-2.76-.28a2 2 0 0 1-.44-2.24c.16-.38.46-.68.86-.88l1.94-1.12a4.4 4.4 0 0 0-1.22-.68c-.28.16-.62.24-.96.24c-.48 0-.96-.2-1.3-.54a2 2 0 0 1-.28-2.76c.3-.4.72-.64 1.2-.68c.48-.06.96.1 1.3.44l1.94 1.12c.22-.42.52-.78.9-1.06V7.46a2 2 0 0 1 1.78-1.94c.5-.04.98.12 1.32.46c.34.34.56.78.62 1.26a1.9 1.9 0 0 1 .06.72v2.24c.46-.06.92-.02 1.36.14l1.94-1.12c.38-.22.84-.28 1.26-.16zm-5.94 5.08c0 .34-.08.68-.26.96c-.34.58-.98.92-1.66.86a1.92 1.92 0 0 1-1.66-1.82c0-.34.08-.68.26-.96c.34-.58.98-.92 1.66-.86c.72.04 1.3.52 1.54 1.18c.08.2.12.42.12.64z" fill="#10A37F" />
  </svg>
);

// 3. Python Icon
export const PythonIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size = 32 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.625 0c-3.1 0-2.91 1.35-2.91 1.35l.01 1.39h2.95v.42H7.55s-2.54-.3-2.54 2.54c0 2.84 2.19 2.74 2.19 2.74h1.31v-1.85s-.04-2.22 2.22-2.22s2.22 2.22 2.22 2.22v3.7s0 2.27-2.22 2.27c-1.39 0-3.66 0-3.66 0s-2.27.13-2.27-2.14V7.63H3.08S0 7.8 0 11.61c0 3.82 2.74 3.7 2.74 3.7h1.64v2.01s-.11 2.37 2.37 2.37c2.48 0 4.14 0 4.14 0s2.32.06 2.32-2.32v-1.39h-2.9v-.43h4.15s2.54.3 2.54-2.54s-2.19-2.74-2.19-2.74H15.8v1.85s.04 2.22-2.22 2.22s-2.22-2.22-2.22-2.22v-3.7s0-2.27 2.22-2.27c1.39 0 3.66 0 3.66 0s2.27-.13 2.27 2.14v2.79h1.79s3.08-.17 3.08-3.98c0-3.81-2.74-3.7-2.74-3.7h-1.64V2.37S19.57 0 17.09 0h-5.465zM8.36 1.83a.82.82 0 1 1 0 1.64.82.82 0 0 1 0-1.64zm7.28 18.51a.82.82 0 1 1 0 1.64.82.82 0 0 1 0-1.64z" fill="url(#python-gradient)" />
    <defs>
      <linearGradient id="python-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3776AB" />
        <stop offset="100%" stopColor="#FFD343" />
      </linearGradient>
    </defs>
  </svg>
);

// 4. Django Icon
export const DjangoIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size = 32 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.36 0H2.64C1.18 0 0 1.18 0 2.64v18.72C0 22.82 1.18 24 2.64 24h18.72c1.46 0 2.64-1.18 2.64-2.64V2.64C24 1.18 22.82 0 21.36 0z" fill="#092E20" />
    <path d="M9.1 19.3v-4.5c0-1.9-.9-2.9-2.6-2.9-1.2 0-2 .6-2.5 1.5V11.2H2.3v8.1h1.7v-.9c.5.7 1.2 1.1 2.3 1.1 1.9 0 2.8-1 2.8-2.2zm-1.7.3c0 .8-.5 1.2-1.3 1.2-.9 0-1.4-.5-1.4-1.2v-2.9c0-.8.5-1.2 1.4-1.2.8 0 1.3.4 1.3 1.2v2.9zm13.1-.3v-8.1h-1.7v4.6c0 1.8-.7 2.7-2.1 2.7-1.1 0-1.7-.5-1.7-1.5v-5.8h-1.7v6.1c0 1.9 1 2.9 2.8 2.9 1.3 0 2.1-.5 2.6-1.5v1.2h1.8v-.1zM11.6 7c.7 0 1.2-.5 1.2-1.2S12.3 4.6 11.6 4.6s-1.2.5-1.2 1.2S10.9 7 11.6 7z" fill="#fff" />
  </svg>
);

// 5. Flask Icon
export const FlaskIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size = 32 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 19.66L13.88 11.3V3.91h1.16V2H9v1.91h1.16v7.39L5 19.66A2.24 2.24 0 0 0 6.94 23h10.12a2.24 2.24 0 0 0 1.94-3.34zM10.84 21L13 17.5l2.16 3.5H10.84z" fill="#ffffff" stroke="#000000" strokeWidth="0.5" />
  </svg>
);

// 6. MongoDB Icon
export const MongoDBIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size = 32 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0c-.26 0-.52.02-.78.06-1.76 2.06-3.8 6.44-3.8 10.94 0 6 3.48 9.76 4.3 10.6a.43.43 0 0 0 .56 0c.82-.84 4.3-4.6 4.3-10.6 0-4.5-2.04-8.88-3.8-10.94C12.52.02 12.26 0 12 0zm.08 1.98c1.3 1.7 2.92 5.08 2.92 8.84 0 4.54-2.32 7.64-3 8.36-.68-.72-3-3.82-3-8.36 0-3.76 1.62-7.14 2.92-8.84.04.14.06.28.08.4.1.72.48 3.52.88 4.66a.35.35 0 0 0 .66 0c.4-1.14.78-3.94.88-4.66.02-.12.04-.26.08-.4z" fill="#47A248" />
  </svg>
);

// 7. PostgreSQL Icon
export const PostgreSQLIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size = 32 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.02 0c-2.3 0-4.22.42-5.74 1.18-.84-.7-2-.84-2.8-.7-.96.14-1.6.64-1.92 1.48-.38.9-.14 2.38.64 3.3.06.08.1.18.1.28v1.78c0 1.28.32 2.5 1 3.54a7.96 7.96 0 0 0 .5 2.1c-.24.6-.54 1.12-.86 1.54-.7.9-1.52 1.28-2.28 1.34-.14 0-.28 0-.42-.04-.54-.14-.94-.56-1.14-1.22V12.7c.06-.06.1-.14.1-.24V11.2a1.35 1.35 0 0 0-1.34-1.34h-.92C.46 9.86 0 10.32 0 10.9v2.52c0 .42.24.78.6.96.16.82.52 1.64 1.1 2.3.82.96 1.94 1.48 3.16 1.48.58 0 1.16-.12 1.7-.36 1.18 1.12 2.82 1.84 4.54 2.12a2.82 2.82 0 0 0 2.2 1.6h.46a2.8 2.8 0 0 0 2.76-2.58 12.3 12.3 0 0 0 3.74-.78 5.76 5.76 0 0 0 3.1-2.92c.62-1.32.74-3.08.38-4.9-.16-.84-.46-1.68-.86-2.48a9.42 9.42 0 0 0 .42-3.8c-.14-1.3-.64-2.42-1.44-3.26C20.14.7 18.06.08 15.6.02A13.2 13.2 0 0 0 12.02 0zm0 1.38c.98 0 1.92.1 2.76.28.84.18 1.56.46 2.14.88.7.5.94 1.24.8 2a3.86 3.86 0 0 1-.8 1.84c-.48.54-1.14.8-1.92.8H12.9v1.38h2.08c1.38 0 2.5 1.12 2.5 2.5v2.08c0 1.24-.9 2.28-2.08 2.48a12.8 12.8 0 0 1-5.18.52c-1.3-.18-2.48-.7-3.4-1.5V11.2c0-1.38 1.12-2.5 2.5-2.5h2.24V7.32H9.3c-.78 0-1.44-.26-1.92-.8-.6-.6-.74-1.34-.8-1.84a3.86 3.86 0 0 1 .8-2c.58-.42 1.3-.7 2.14-.88.78-.18 1.6-.28 2.5-.28z" fill="#336791" />
  </svg>
);

// 8. Redis Icon
export const RedisIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size = 32 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L2.1 5.7v12.6L12 24l9.9-5.7V5.7L12 0zm7.9 6.8l-7.9 4.5-7.9-4.5 7.9-4.5 7.9 4.5zm-15.8 2.3l6.9 4v6.8l-6.9-4V9.1zm8.9 10.8V13.1l6.9-4v6.8l-6.9 4z" fill="#D82C20" />
  </svg>
);

// 9. Git Icon
export const GitIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size = 32 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.384 11.41L12.59.616a1.686 1.686 0 0 0-2.388 0L9.08 1.74l3.197 3.197a1.69 1.69 0 0 1 2.348 2.428l-3.2 3.2v6.237a1.69 1.69 0 1 1-1.69 0V11.23L6.68 8.172a1.69 1.69 0 1 1 0-2.388L9.736 8.84V2.39L.616 11.51a1.686 1.686 0 0 0 0 2.388l10.795 10.795a1.686 1.686 0 0 0 2.388 0l10.795-10.795a1.69 1.69 0 0 0-.01-2.388z" fill="#F05032" />
  </svg>
);

// 10. GitHub Icon
export const GitHubIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size = 32 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" fill="#FFFFFF" />
  </svg>
);

// 11. React Icon
export const ReactIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size = 32 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(150 12 12)" />
    <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
  </svg>
);

// 12. JavaScript Icon
export const JavaScriptIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size = 32 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0V0z" fill="#F7DF1E" />
    <path d="M12.63 18.82c.48.86 1.14 1.42 2.33 1.42 1.1 0 1.8-.54 1.8-1.74 0-2.82-3.8-3.04-3.8-5.46 0-1.46 1.14-2.58 2.76-2.58 1.42 0 2.24.68 2.72 1.64l-1.84 1.12c-.32-.6-.72-.94-1.28-.94-.6 0-1 .4-1 1.04 0 2.42 3.82 2.72 3.82 5.52 0 1.88-1.48 2.92-3.46 2.92-2 0-3.26-1.12-3.86-2.38l1.77-1.1zM7.13 18.51c.36.68.84 1.12 1.62 1.12.72 0 1.14-.36 1.14-.94V9.67h2.23v8.94c0 2.22-1.34 3.02-3.12 3.02-1.78 0-2.76-.9-3.24-2l1.37-1.13z" fill="#000000" />
  </svg>
);

// 13. HTML Icon
export const HTMLIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size = 32 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0z" fill="#E34F26" />
    <path d="M12 2.2v19.6l6.6-2.2L20.1 3.8 12 2.2z" fill="#F06529" />
    <path d="M12 10.9H8.4V7.3h7.2V5.1H6.2l.4 8h5.4v-2.2zm0 5.4l-3-1-.2-2.1H6.6l.4 4.3 5 1.6v-2.8z" fill="#EBEBEB" />
    <path d="M12 10.9h3.6l-.3 3.6-3.3 1v2.8l5-1.6.5-6H12v2.2zM12 5.1v2.2h3.6l-.1 1H12v2.2h4.8l.4-5.4H12z" fill="#FFFFFF" />
  </svg>
);

// 14. CSS Icon
export const CSSIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size = 32 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0z" fill="#1572B6" />
    <path d="M12 2.2v19.6l6.6-2.2L20.1 3.8 12 2.2z" fill="#33A9DC" />
    <path d="M12 10.9H8.4V7.3h7.2V5.1H6.2l.4 8h5.4v-2.2zm0 5.4l-3-1-.2-2.1H6.6l.4 4.3 5 1.6v-2.8z" fill="#EBEBEB" />
    <path d="M12 10.9h3.6l-.3 3.6-3.3 1v2.8l5-1.6.5-6H12v2.2zM12 5.1v2.2h3.6l-.1 1H12v2.2h4.8l.4-5.4H12z" fill="#FFFFFF" />
  </svg>
);

// 15. Bootstrap Icon
export const BootstrapIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size = 32 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#7952B3" />
    <path d="M6.3 5.4h4.8c1.3 0 2.2.3 2.8.9.6.6.9 1.4.9 2.4 0 .8-.2 1.5-.6 2-.4.5-1.1.8-1.9.9.9.1 1.7.5 2.2 1.1s.8 1.4.8 2.5c0 1.2-.4 2.1-1.1 2.8s-1.8 1-3.2 1H6.3V5.4zm3 2.7v2.8h1.6c.5 0 .9-.1 1.2-.3.3-.2.4-.6.4-1.1 0-.5-.1-.9-.4-1.1-.3-.2-.7-.3-1.2-.3H9.3zm0 5.4v3.4h2.1c.5 0 .9-.1 1.2-.4.3-.3.4-.7.4-1.3 0-.6-.1-1-.4-1.3-.3-.3-.7-.4-1.2-.4H9.3z" fill="#FFFFFF" />
  </svg>
);

// 16. Tailwind CSS Icon
export const TailwindIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size = 32 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6.027c-2.38 0-4.047 1.19-5 3.57 1.19-1.19 2.38-1.666 3.57-1.428 1.05.21 1.8 1.002 2.63 1.895C14.542 11.49 16.326 13.4 19.86 13.4c2.38 0 4.047-1.19 5-3.57-1.19 1.19-2.38 1.666-3.57 1.428-1.05-.21-1.8-1.002-2.63-1.895C17.318 8.01 15.534 6.1 12 6.027zM5 13.4c-2.38 0-4.047 1.19-5 3.57 1.19-1.19 2.38-1.666 3.57-1.428 1.05.21 1.8 1.002 2.63 1.895C7.542 18.863 9.326 20.77 12.86 20.77c2.38 0 4.047-1.19 5-3.57-1.19 1.19-2.38 1.666-3.57 1.428-1.05-.21-1.8-1.002-2.63-1.895C10.318 15.383 8.534 13.48 5 13.4z" fill="#06B6D4" />
  </svg>
);

// 17. Node.js Icon
export const NodejsIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size = 32 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1.63L2.4 7.2v11.14L12 23.97l9.6-5.63V7.2L12 1.63zm7.6 15.57l-7.6 4.46-7.6-4.46V8.37l7.6-4.46 7.6 4.46v8.83z" fill="#339933" />
    <path d="M12 5.5l-6 3.5v7l6 3.5 6-3.5v-7l-6-3.5zm0 11.2l-3.6-2.1V10.4l3.6-2.1 3.6 2.1v4.2l-3.6 2.1z" fill="#339933" opacity="0.6" />
  </svg>
);

// 18. Streamlit Icon
export const StreamlitIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size = 32 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.123 20H4.877c-.504 0-.825-.536-.576-.975L11.424 6.95a.666.666 0 0 1 1.152 0l7.123 12.075c.249.439-.072.975-.576.975z" fill="#FF4B4B" />
    <path d="M12 2l4.5 7.79H7.5L12 2z" fill="#FFE0E0" opacity="0.5" />
    <path d="M12 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#FF4B4B" />
  </svg>
);

// 19. TensorFlow Icon
export const TensorFlowIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size = 32 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.78 0l-9.15 5.3v10.6l9.15 5.29 9.15-5.3V5.3L12.78 0zm7.15 15.3l-7.15 4.13V8.87l7.15-4.13v10.56zm-14.3 0V4.74l7.15 4.13v10.56l-7.15-4.13z" fill="#FF6F00" />
  </svg>
);
