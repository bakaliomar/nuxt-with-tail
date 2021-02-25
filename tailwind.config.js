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
      textColor: ['checked']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
