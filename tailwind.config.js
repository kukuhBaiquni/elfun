/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
      './src/layouts/**/*.{js,ts,jsx,tsx}',
    ],
    safelist: [
      'bg-elsword',
      'text-elsword',
      'hover:bg-elsword',
      'dark:text-elsword-dark',
      'bg-aisha',
      'text-aisha',
      'hover:bg-aisha',
      'dark:text-aisha-dark',
      'bg-rena',
      'text-rena',
      'hover:bg-rena',
      'dark:text-rena-dark',
      'bg-raven',
      'text-raven',
      'hover:bg-raven',
      'dark:text-raven-dark',
      'bg-eve',
      'text-eve',
      'hover:bg-eve',
      'dark:text-eve-dark',
      'bg-chung',
      'text-chung',
      'hover:bg-chung',
      'dark:text-chung-dark',
      'bg-ara',
      'text-ara',
      'hover:bg-ara',
      'dark:text-ara-dark',
      'bg-elesis',
      'text-elesis',
      'hover:bg-elesis',
      'dark:text-elesis-dark',
      'bg-add',
      'text-add',
      'hover:bg-add',
      'dark:text-add-dark',
      'bg-luciel',
      'text-luciel',
      'hover:bg-luciel',
      'dark:text-luciel-dark',
      'bg-rose',
      'text-rose',
      'hover:bg-rose',
      'dark:text-rose',
      'bg-ain',
      'text-ain',
      'hover:bg-ain',
      'dark:text-ain-dark',
      'bg-laby',
      'text-laby',
      'hover:bg-laby',
      'dark:text-laby-dark',
      'bg-noah',
      'text-noah',
      'hover:bg-noah',
      'dark:text-noah-dark',

      'bg-ruben',
      'text-ruben',
      'hover:bg-ruben',
      'dark:text-ruben-dark',
      'bg-elder',
      'text-elder',
      'hover:bg-elder',
      'dark:text-elder-dark',
      'bg-bethma',
      'text-bethma',
      'hover:bg-bethma',
      'dark:text-bethma-dark',
      'bg-altera',
      'text-altera',
      'hover:bg-altera',
      'dark:text-altera-dark',
      'bg-feita',
      'text-feita',
      'hover:bg-feita',
      'dark:text-feita-dark',
      'bg-velder',
      'text-velder',
      'hover:bg-velder',
      'dark:text-velder-dark',
      'bg-hamel',
      'text-hamel',
      'hover:bg-hamel',
      'dark:text-hamel-dark',
      'bg-sander',
      'text-sander',
      'hover:bg-sander',
      'dark:text-sander',
      'bg-lanox',
      'text-lanox',
      'hover:bg-lanox',
      'dark:text-lanox-dark',
      'bg-atlas',
      'text-atlas',
      'hover:bg-atlas',
      'dark:text-atlas-dark',
      'bg-elysion',
      'text-elysion',
      'hover:bg-elysion',
      'dark:text-elysion-dark',
      'bg-elrianode',
      'text-elrianode',
      'hover:bg-elrianode',
      'dark:text-elrianode-dark',
      'bg-varnimyr',
      'text-varnimyr',
      'hover:bg-varnimyr',
      'dark:text-varnimyr',
      'bg-rigomor',
      'text-rigomor',
      'hover:bg-rigomor',
      'dark:text-rigomor-dark',
      'bg-master-road',
      'text-master-road',
      'hover:bg-master-road',
      'dark:text-master-road-dark',
      'bg-pruinaum',
      'text-pruinaum',
      'hover:bg-pruinaum',
      'dark:text-pruinaum-dark',
      'bg-pruinaum-outskirt',
      'text-pruinaum-outskirt',
      'hover:bg-pruinaum-outskirt',
      'dark:text-pruinaum-outskirt-dark',

      'dark:hover:text-gray-600',
    ],
  },
  darkMode: 'class', // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito'],
        titillium: ['Titillium Web'],
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
          light: '#fff653',
          DEFAULT: '#fff653',
          dark: '#fff653',
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
        ruben: {
          light: '#3cd44a',
          DEFAULT: '#3cd44a',
          dark: '#3cd44a',
        },
        elder: {
          light: '#34afef',
          DEFAULT: '#34afef',
          dark: '#34afef',
        },
        bethma: {
          light: '#f7812b',
          DEFAULT: '#f7812b',
          dark: '#f7812b',
        },
        altera: {
          light: '#782f0f',
          DEFAULT: '#782f0f',
          dark: '#AA5C3A',
        },
        feita: {
          light: '#800c9d',
          DEFAULT: '#800c9d',
          dark: '#A54CBB',
        },
        velder: {
          light: '#be352b',
          DEFAULT: '#be352b',
          dark: '#E66157',
        },
        hamel: {
          light: '#007be4',
          DEFAULT: '#007be4',
          dark: '#007be4',
        },
        sander: {
          light: '#E0CB36',
          DEFAULT: '#f2e26d',
          dark: '#f2e26d',
        },
        lanox: {
          light: '#e94f0f',
          DEFAULT: '#e94f0f',
          dark: '#e94f0f',
        },
        atlas: {
          light: '#e56855',
          DEFAULT: '#e56855',
          dark: '#e56855',
        },
        elysion: {
          light: '#ff2e55',
          DEFAULT: '#ff2e55',
          dark: '#ff2e55',
        },
        elrianode: {
          light: '#878aff',
          DEFAULT: '#878aff',
          dark: '#878aff',
        },
        varnimyr: {
          light: '#5150d9',
          DEFAULT: '#5150d9',
          dark: '#5150d9',
        },
        rigomor: {
          light: '#44f0e8',
          DEFAULT: '#44f0e8',
          dark: '#44f0e8',
        },
        'master-road': {
          light: '#E1741C',
          DEFAULT: '#E1741C',
          dark: '#E1741C',
        },
        pruinaum: {
          light: '#54a3c5',
          DEFAULT: '#54a3c5',
          dark: '#54a3c5',
        },
        'pruinaum-outskirt': {
          light: '#cf0077',
          DEFAULT: '#cf0077',
          dark: '#cf0077',
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
  },
}
