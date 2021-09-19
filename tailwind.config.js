/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito'],
      },
      colors: {
        ...colors,
        elsword: {
          light: '#cc2721',
          DEFAULT: '#cc2721',
          dark: '#E1625E',
        },
        aisha: {
          light: '#971ed3',
          DEFAULT: '#971ed3',
          dark: '#D491F6',
        },
        rena: {
          light: '#21cc27',
          DEFAULT: '#21cc27',
          dark: '#21cc27',
        },
        raven: {
          light: '#707070',
          DEFAULT: '#707070',
          dark: '#C5C5C5',
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
          dark: '#FFAFB0',
        },
        add: {
          light: '#cf61eb',
          DEFAULT: '#cf61eb',
          dark: '#cf61eb',
        },
        luciel: {
          light: '#2a14f2',
          DEFAULT: '#2a14f2',
          dark: '#ABA1FF',
        },
        rose: {
          light: '#d8cc1c',
          DEFAULT: '#d8cc1c',
          dark: '#EFE65B',
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
      height: {
        sidebar: '750px',
        'sidebar-overflow': '800px',
      },
      transitionProperty: {
        'transform-opacity': 'transform, opacity',
      },
    },
  },
  variants: {
    extend: {
      filter: ['hover'],
    },
    scrollbar: ['rounded'],
  },
  plugins: [require('tailwind-scrollbar')],
}
