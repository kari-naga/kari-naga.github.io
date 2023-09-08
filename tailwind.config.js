// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      animation: {
        text: 'text 5s linear infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left top',
          },
          '25%': {
            'background-size': '200% 200%',
            'background-position': 'right top',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right bottom',
          },
          '75%': {
            'background-size': '200% 200%',
            'background-position': 'left bottom',
          },
        },
      },
    },
    fontFamily: {
      montserrat: ['MontserratVariable', 'Montserrat', ...defaultTheme.fontFamily.sans],
    },
  },
  darkMode: 'class',
}
