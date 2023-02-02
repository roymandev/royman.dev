/* eslint-disable @typescript-eslint/no-var-requires */

const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
      },
      typography: ({ theme }) => ({
        theme: {
          css: {
            '--tw-prose-body': theme('colors.slate[800]'),
            '--tw-prose-headings': theme('colors.slate[800]'),
            '--tw-prose-lead': theme('colors.slate[800]'),
            '--tw-prose-links': theme('colors.slate[800]'),
            '--tw-prose-bold': theme('colors.slate[800]'),
            '--tw-prose-counters': theme('colors.slate[800]'),
            '--tw-prose-bullets': theme('colors.slate[800]'),
            '--tw-prose-hr': theme('colors.slate[800]'),
            '--tw-prose-quotes': theme('colors.slate[800]'),
            '--tw-prose-quote-borders': theme('colors.slate[800]'),
            '--tw-prose-captions': theme('colors.slate[800]'),
            '--tw-prose-code': theme('colors.slate[800]'),
            '--tw-prose-pre-code': theme('colors.slate[800]'),
            '--tw-prose-pre-bg': theme('colors.slate[800]'),
            '--tw-prose-th-borders': theme('colors.slate[800]'),
            '--tw-prose-td-borders': theme('colors.slate[800]'),
            '--tw-prose-invert-body': theme('colors.neutral[300]'),
            '--tw-prose-invert-headings': theme('colors.neutral[300]'),
            '--tw-prose-invert-lead': theme('colors.neutral[300]'),
            '--tw-prose-invert-links': theme('colors.neutral[300]'),
            '--tw-prose-invert-bold': theme('colors.neutral[300]'),
            '--tw-prose-invert-counters': theme('colors.neutral[300]'),
            '--tw-prose-invert-bullets': theme('colors.neutral[300]'),
            '--tw-prose-invert-hr': theme('colors.neutral[300]'),
            '--tw-prose-invert-quotes': theme('colors.neutral[300]'),
            '--tw-prose-invert-quote-borders': theme('colors.neutral[300]'),
            '--tw-prose-invert-captions': theme('colors.neutral[300]'),
            '--tw-prose-invert-code': theme('colors.neutral[300]'),
            '--tw-prose-invert-pre-code': theme('colors.neutral[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.neutral[300]'),
            '--tw-prose-invert-td-borders': theme('colors.neutral[300]'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
