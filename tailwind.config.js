/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      dark: '#0C0C0E',
      gray: '#8E8E8E',
      gold: '#BB945F',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Forum', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
