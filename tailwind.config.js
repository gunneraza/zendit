module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      padding: '20px'
    },
    screens: {
      '3xl': '1635px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
