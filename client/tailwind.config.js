/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        maroon: '#6B0F1A',
        gold: '#C9A227',
        cream: '#FFF7E8',
        beige: '#F6EFD8',
        rose: '#E8A0BF'
      },
      boxShadow: { luxe: '0 12px 28px rgba(107,15,26,0.15)' }
    }
  },
  plugins: []
};
