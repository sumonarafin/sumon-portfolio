/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          dark: "#030014",
          card: "rgba(15, 12, 41, 0.6)",
          accent: "#7f5af0",
          cyan: "#2cb67d",
          pink: "#ff007f",
          purple: "#9d4edf"
        },
        // Dynamic theme colors — actual values come from CSS variables set
        // at page load (see index.html), so a fresh random palette applies
        // on every reload without touching any component code.
        accent1: 'rgb(var(--accent-1-rgb) / <alpha-value>)',
        accent2: 'rgb(var(--accent-2-rgb) / <alpha-value>)',
        accent3: 'rgb(var(--accent-3-rgb) / <alpha-value>)',
        glow: 'rgb(var(--glow-rgb) / <alpha-value>)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 20s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      }
    },
  },
  plugins: [],
}
