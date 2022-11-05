const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [],
  theme: {
    extend: {},
    fontFamily: {
      'montserrat': ['MontserratVariable', 'Montserrat', ...defaultTheme.fontFamily.sans],
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
  ],
}