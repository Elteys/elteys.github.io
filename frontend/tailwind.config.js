/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0a0a0a',
        'brand-light': '#1a1a1a',
        'brand-accent': '#00FFD1',
        'brand-text': '#f4f4f5',
        'brand-text-secondary': '#9ca3af',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
