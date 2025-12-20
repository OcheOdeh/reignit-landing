import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-gradient-start': '#8b5cf6', // Neon Purple
        'primary-gradient-end': '#d946ef', // Pinkish purple
        'dark-canvas': '#0A0A0A', // Deep Charcoal
        'accent': '#10b981', // Neon Green
        'neutral-white': '#ededed',
        'neutral-smoke': '#121212',
        'glass-card': 'rgba(255, 255, 255, 0.05)', // Updated for lighter/softer glass
        background: '#0A0A0A', // Deep Charcoal
        foreground: '#ededed',
        primary: {
          DEFAULT: '#8b5cf6',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#10b981',
          foreground: '#000000',
        },
        'cyber-black': '#050505',
        'cyber-gray': '#121212',
        'neon-green': '#39ff14',
        'neon-purple': '#bf00ff',
      },
      fontFamily: {
        'headline': ['var(--font-plus-jakarta)', 'sans-serif'],
        'body': ['var(--font-inter)', 'sans-serif'],
        'display': ['var(--font-plus-jakarta)', 'sans-serif'],
        'sans': ['var(--font-inter)', 'sans-serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(45deg, var(--tw-colors-primary-gradient-start), var(--tw-colors-primary-gradient-end))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      animation: {
        'count-up': 'countUp 2s ease-out forwards',
        'float': 'float 3s ease-in-out infinite'
      },
      keyframes: {
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      height: {
        'screen-full': '100vh'
      },
      backdropBlur: {
        'card': '12px'
      }
    },
  },
  plugins: [],
};

export default config;
