/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'background-primary': 'rgb(255, 255, 255)',
        'text-primary': 'rgb(92, 92, 92)',
        'border-primary': 'rgb(231, 231, 231)',
        'button-background': 'rgb(92, 92, 92)',
        'button-text': 'rgb(255, 255, 255)',
        'background-inverted': 'rgb(28, 28, 28)',
        'text-inverted': 'rgb(255, 255, 255)',
        'border-inverted': 'rgb(62, 62, 62)',
      }
    },
  },
  plugins: [],
}