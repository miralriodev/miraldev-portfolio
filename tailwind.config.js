// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx,html}", // ajusta esto según la estructura de tu proyecto
    ],
    darkMode: 'class', // esto habilita el modo oscuro basado en clases
    theme: {
      extend: {
        keyframes: {
                   shine: {
                     '0%': { 'background-position': '100%' },
                     '100%': { 'background-position': '-100%' },
                   },
                 },
      },
      animation: {
                 shine: 'shine 5s linear infinite',
              },
    },
    plugins: [],
  }