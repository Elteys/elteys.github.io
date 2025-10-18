/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 🌌 PODSTAWOWE TŁA (głęboka czerń z niebieskim undertone)
        'bg-primary': '#0a0a0f',
        'bg-secondary': '#15152a', 
        'bg-tertiary': '#1e1e3a',
        'bg-card': '#1a1a2e',

        // 🎨 GRADIENT AKCENTY
        'accent': {
          DEFAULT: '#8b5cf6',           // główny purple
          start: '#ff0080',             // różowy start gradientu
          end: '#7928ca',               // fioletowy koniec gradientu
          hover: '#a78bfa',             // jaśniejszy purple
          dark: '#6d28d9',              // ciemniejszy wariant
        },

        // 🌟 DODATKOWE KOLORY GRADIENTÓW
        'gradient': {
          'electric': '#6366f1',        // indigo
          'neon': '#ec4899',            // pink
          'cyan': '#06b6d4',            // cyan
          'orange': '#f59e0b',          // amber
        },

        // ✨ TEKSTY
        'text-primary': '#fafafa',
        'text-secondary': '#d1d5db',
        'text-muted': '#9ca3af',
        'text-glow': '#e0e7ff',         // tekst z niebieskim undertone

        // ⚡ ELEMENTY INTERFEJSU
        'ui-border': '#3730a3',
        'ui-hover': '#312e81',
        'ui-icon': '#c7d2fe',
        'ui-glass': 'rgba(139, 92, 246, 0.1)', // szkliste tła

        // 🎯 STANY
        'success': '#10b981',
        'warning': '#f59e0b',
        'error': '#ef4444',
        'info': '#3b82f6'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      // 🌈 Customne animacje gradientowe
      animation: {
        'gradient': 'gradient 3s ease infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 
            'background-position': '0% 50%',
            'background-size': '200% 200%'
          },
          '50%': { 
            'background-position': '100% 50%',
            'background-size': '200% 200%'
          },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.6)',
            transform: 'scale(1.02)'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        }
      },
      // 🎭 Customne style tła
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'main-gradient': 'linear-gradient(135deg, #ff0080, #7928ca, #6366f1)',
        'card-gradient': 'linear-gradient(145deg, rgba(139, 92, 246, 0.1), rgba(255, 0, 128, 0.05))',
      }
    },
  },
  plugins: [],
};