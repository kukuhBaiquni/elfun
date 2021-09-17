// eslint-disable-next-line import/no-extraneous-dependencies
// const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito'],
      },
    },
  },
  variants: {
    extend: {
      filter: ['hover'],
    },
  },
  plugins: [],
}
