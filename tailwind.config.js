// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ['MontserratVariable', 'Montserrat', ...defaultTheme.fontFamily.sans],
    },
  },
  darkMode: 'class',
}
