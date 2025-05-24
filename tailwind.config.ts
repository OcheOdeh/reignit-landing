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
        'primary-gradient-start': '#7F00FF',
        'primary-gradient-end': '#00E4FF',
        'dark-canvas': '#0B0E21',
        'accent': '#FF5F5F',
        'neutral-white': '#FFFFFF',
        'neutral-smoke': '#F5F7FA',
        'glass-card': 'rgba(255,255,255,0.08)',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'headline': ['Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif']
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
