module.exports = {
  purge: [
    './components/**/*.{vue,js}',

    './layouts/**/*.vue',

    './pages/**/*.vue',

    './plugins/**/*.{js,ts}',

    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          xl: '10rem',
        },
      },
      colors: {
        'custom-blue':'#99d4ff',
        'gray-black' : '#1e1e1e',
        'custom-black' : '#191919'
      },
      fontFamily: {
        'robo' : ['Roboto', 'sans-serif']
      },
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      textColor: ['checked'],
      transitionProperty: {
        'height': 'height',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
