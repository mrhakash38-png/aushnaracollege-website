/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'college-blue': '#1e3a8a',
        'college-gold': '#f59e0b',
        'college-green': '#059669'
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['Inter', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}