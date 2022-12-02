/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '30rem',
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'dark-blue': '#191E29',
      'semi-dark-blue': '#132D46',
      'dark-green': '#009D71',
      'green': '#01C38D',
      'dark-white': '#D5D5D5',
      'white': '#FFFFFF',
      'gray': '#7D7878'
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'bebas': ['Bebas Neue', 'sans-serif'],
      'lol': ['Friz Quadrata Std', 'sans-serif'],
      'val': ['VALORANT', 'sans-serif'],
      'fort': ['Luckiest Guy', 'cursive']
    }
  },
  plugins: [],
}
