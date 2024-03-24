/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      'scrollbar-width': 'none',
    },
    colors: {
      primary: {
        light: 'rgb(var(--color-primary-light) / <alpha-value>)',
      },
      ...colors,
    },
  },
  plugins: [],
}
