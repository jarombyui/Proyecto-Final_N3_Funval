/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3c47e9', 
        secondary: '#1e213a', 
        accent: '#e7e7eb', 
        muted: '#6e707a', 
        highlight: '#ffec65',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
      },
      spacing: {
        '4.5': '1.125rem',
      },
      borderRadius: {
        'lg': '0.5rem',
      },
    },
  },
  plugins: [],
};