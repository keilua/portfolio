/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './src/index.html'
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        gray: {
          DEFAULT: '#808080', 
          light: '#D3D3D3', 
          dark: '#404040', 
        },
        pink: {
          DEFAULT: '#FFC0CB', 
          light: '#FFB6C1', 
          dark: '#FF69B4', 
        },
      },
    },
  },
  plugins: [],
};
