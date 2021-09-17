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
      primary: {
        DEFAULT: '#7c0c10',
        dark: '#7c0c10',
        light: '#7c0c10',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
