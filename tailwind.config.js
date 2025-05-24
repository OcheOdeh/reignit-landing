/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
      },
      fontFamily: {
        'headline': ['Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      height: {
        'screen-full': '100vh',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, var(--primary-gradient-start), var(--primary-gradient-end))',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
}
