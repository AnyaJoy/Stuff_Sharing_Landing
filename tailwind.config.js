/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
      quote: ["Tangerine"],
      "fairy-tale": ["Cormorant Upright"],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      main: '#7C4DFF',
      secondary: '#6200EA',
      red: '#FF0000',
      neutralGrey: '#B5B9CE',
      neutral: {
        500: "#8A8B96",
        700: "#3B3B45",
      },
      'white': '#ffffff',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ececec',
      'bubble-gum': '#ff77e9',
      'brown': '#705746',
      'grey': "#616161",
      'purple-light': '#B388FF',
      'purple': '#7C4DFF',
      'blue-purple': '#651FFF',
      'purple-dark': '#6200EA',
      'purpleBlue': '#8C93FB',
      'orange': '#ee6002',
      'orange-light': '#FDBA74',
      'orange-dark': '#B45309',
      'orange-bg': '#FB923C',
    },
    screens: {
      'xs': '300px',
      // => @media (min-width: 300px) { ... }

      'sm': '600px',
      // => @media (min-width: 600px) { ... }

      'md': '900px',
      // => @media (min-width: 900px) { ... }

      'lg': '1200px',
      // => @media (min-width: 1200px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  }
}
