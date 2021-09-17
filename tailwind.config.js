// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require('tailwindcss/colors')

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
    colors: {
      ...colors,
      elsword: {
        light: '#cc2721',
        DEFAULT: '#cc2721',
        dark: '#cc2721',
      },
      aisha: {
        light: '#971ed3',
        DEFAULT: '#971ed3',
        dark: '#971ed3',
      },
      rena: {
        light: '#21cc27',
        DEFAULT: '#21cc27',
        dark: '#21cc27',
      },
      raven: {
        light: '#707070',
        DEFAULT: '#707070',
        dark: '#707070',
      },
      eve: {
        light: '#e45698',
        DEFAULT: '#e45698',
        dark: '#e45698',
      },
      chung: {
        light: '#5bb4e4',
        DEFAULT: '#5bb4e4',
        dark: '#5bb4e4',
      },
      ara: {
        light: '#e89924',
        DEFAULT: '#e89924',
        dark: '#e89924',
      },
      elesis: {
        light: '#990c0e',
        DEFAULT: '#990c0e',
        dark: '#990c0e',
      },
      add: {
        light: '#cf61eb',
        DEFAULT: '#cf61eb',
        dark: '#cf61eb',
      },
      luciel: {
        light: '#2a14f2',
        DEFAULT: '#2a14f2',
        dark: '#2a14f2',
      },
      rose: {
        light: '#ebd661',
        DEFAULT: '#ebd661',
        dark: '#ebd661',
      },
      ain: {
        light: '#3ef2a4',
        DEFAULT: '#3ef2a4',
        dark: '#3ef2a4',
      },
      laby: {
        light: '#f530a3',
        DEFAULT: '#f530a3',
        dark: '#f530a3',
      },
      noah: {
        light: '#7a61eb',
        DEFAULT: '#7a61eb',
        dark: '#7a61eb',
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
