/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        squat: 'squat 1.5s ease-in-out infinite',
      },
      keyframes: {
        squat: {
          '0%, 100%': {
            transform: 'scaleY(1)',
          },
          '50%': {
            transform: 'scaleY(1.2)',
          },
        },
      },
    },
  },
  plugins: [],
};
