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
        brandDark: '#080F1D',
        brandCyan: '#00F2FE',
        brandNavy: '#0F172A',
      }
    },
  },
  plugins: [],
}