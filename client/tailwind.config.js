/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        //  Signature Fiery Orange Palette
        brand: {
          50: '#fff5f0',
          100: '#ffe8de',
          200: '#ffd0bd',
          300: '#ffa98d',
          400: '#ff7a45',
          500: '#e8602e', // Primary Button & Brand Accent
          600: '#bc4c22', // Hover / Dark Rust Accent
          700: '#993a18',
          800: '#7e3016',
          900: '#672a16',
          950: '#381208',
        },
        orange: {
          primary: '#E8602E',
          hover: '#BC4C22',
          glow: '#FF7A45',
          dark: '#8C3413',
        },
        dark: {
          bg: '#000000',        // Pure Pitch Black (style)
          surface: '#0A0A0C',   // Deep Canvas
          card: '#121215',      // Card Background
          elevated: '#1A1A1E',  // Card Hover / Popover
          border: '#232328',    // Subtle Border
          borderHover: '#3A3A42',
        },
        text: {
          primary: '#FFFFFF',   // Bright White for Headings
          secondary: '#D4D4D8', // Light Gray for Body/Paragraphs
          muted: '#A1A1AA',     // Muted Gray for Subtitles/Meta
          dim: '#71717A',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-down': 'slideDown 0.4s ease-out forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'blob': 'blob 7s infinite',
        'marquee': 'marquee 25s linear infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      boxShadow: {
        'glow-orange': '0 0 30px -5px rgba(232, 96, 46, 0.45)',
        'glow-orange-lg': '0 0 50px -10px rgba(232, 96, 46, 0.6)',
        'glow-orange-sm': '0 0 15px -3px rgba(232, 96, 46, 0.35)',
        'dark-card': '0 10px 30px -10px rgba(0, 0, 0, 0.8)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'sheryians-glow': 'radial-gradient(circle at 50% -20%, rgba(232, 96, 46, 0.25), transparent 70%)',
        'orange-gradient': 'linear-gradient(135deg, #FF7A45 0%, #E8602E 50%, #BC4C22 100%)',
      },
    },
  },
  plugins: [],
}
