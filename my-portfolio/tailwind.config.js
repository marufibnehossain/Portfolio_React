/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      '4xs': '270px',
      // => @media (min-width: 270px) { ... }

      '3xs': '360px',
      // => @media (min-width: 360px) { ... }

      '2xs': '414px',
      // => @media (min-width: 414px) { ... }

      'mxs': '480px',
      // => @media (min-width: 480px) { ... }

      'xs': '576px',
      // => @media (min-width: 576px) { ... }
      ...defaultTheme.screens,
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}