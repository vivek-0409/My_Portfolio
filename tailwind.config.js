/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'dark-navy': '#0F172A',
                'cool-gray': '#64748B',
                'neon-cyan': '#22D3EE',
                'ice-cyan': '#67E8F9',
                'accent-purple': '#a78bfa',
                'accent-blue': '#3b82f6',
            },
            fontFamily: {
                sans: ['Outfit', 'Inter', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-out forwards',
                'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
                'slide-in-right': 'slideInRight 0.8s ease-out forwards',
                'slide-in-up': 'slideInUp 0.8s ease-out forwards',
                'background-pan': 'backgroundPan 15s ease infinite alternate',
                'underline-grow': 'underlineGrow 0.6s ease-out forwards',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'quick-panel-slide-in': 'quickPanelSlideIn 0.5s ease-out forwards',
                'float': 'float 3s ease-in-out infinite',
                'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
                'shimmer': 'shimmer 3s linear infinite',
                'rotate-slow': 'rotate-slow 20s linear infinite',
                'slide-in-bottom': 'slide-in-bottom 0.6s ease-out forwards',
                'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'scale-in': 'scaleIn 0.5s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideInLeft: {
                    '0%': { transform: 'translateX(-100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                slideInRight: {
                    '0%': { transform: 'translateX(100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                slideInUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                backgroundPan: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '100%': { backgroundPosition: '100% 50%' },
                },
                underlineGrow: {
                    '0%': { transform: 'scaleX(0)' },
                    '100%': { transform: 'scaleX(1)' },
                },
                quickPanelSlideIn: {
                    '0%': { transform: 'translateX(-100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                pulseGlow: {
                    '0%, 100%': {
                        opacity: '1',
                        boxShadow: '0 0 20px rgba(34, 211, 238, 0.4)',
                    },
                    '50%': {
                        opacity: '0.8',
                        boxShadow: '0 0 40px rgba(34, 211, 238, 0.8)',
                    },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
            boxShadow: {
                'neon': '0 0 20px rgba(34, 211, 238, 0.3)',
                'neon-lg': '0 0 40px rgba(34, 211, 238, 0.5)',
                'glow': '0 0 30px rgba(34, 211, 238, 0.2)',
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}
