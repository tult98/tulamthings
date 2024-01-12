const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        'wot-fard': ['var(--font-wot-fard)'],
      },
      colors: {
        decorative: 'hsl(var(--color-decorative) / <alpha-value>)',
        muted: 'hsl(var(--color-muted) / <alpha-value>)',
        'homepage-light': 'hsl(var(--color-homepage-light) / <alpha-value>)',
        'homepage-dark': 'hsl(var(--color-homepage-dark) / <alpha-value>)',
        'gray-100': 'hsl(var(--color-gray-100) / <alpha-value>)',
        'gray-200': 'hsl(var(--color-gray-200) / <alpha-value>)',
        'gray-300': 'hsl(var(--color-gray-300) / <alpha-value>)',
        'gray-400': 'hsl(var(--color-gray-400) / <alpha-value>)',
        'gray-500': 'hsl(var(--color-gray-500) / <alpha-value>)',
        'gray-600': 'hsl(var(--color-gray-600) / <alpha-value>)',
        'gray-700': 'hsl(var(--color-gray-700) / <alpha-value>)',
        'gray-900': 'hsl(var(--color-gray-900) / <alpha-value>)',
        'gray-1000': 'hsl(var(--color-gray-1000) / <alpha-value>)',
      },
      animation: {
        'logo-slide-left':
          'logo-slide-left 300ms cubic-bezier(0.27, 0.22, 0.44, 1.03) 750ms 1 normal both running',
        'logo-slide-right':
          'logo-slide-right 300ms cubic-bezier(0.27, 0.22, 0.44, 1.03) 825ms 1 normal both running',
        'drawing-first':
          'drawing 600ms cubic-bezier(0.27, 0.22, 0.44, 1.03) 1200ms 1 normal both running',
        'drawing-second': 'drawing 150ms ease 1050ms 1 normal both running',
      },
      keyframes: {
        'logo-slide-left': {
          '0%': { transform: 'translateX(9px)' },
          '100%': { transform: 'translateX(-6px)' },
        },
        'logo-slide-right': {
          '0%': { transform: 'translateX(-9px)' },
          '100%': { transform: 'translateX(6px)' },
        },
        drawing: {
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: 'hsl(245deg, 100%, 60%)',
          secondary: 'hsl(333deg, 100%, 45%)',
          accent: 'hsl(255deg, 85%, 30%)',
          neutral: 'hsl(222deg, 22%, 5%)',
          'base-100': 'hsl(0deg, 0%, 100%)',
          info: 'hsl(245deg, 100%, 60%)',
          success: 'hsl(160deg, 100%, 40%)',
          error: 'hsl(340deg, 95%, 50%)',
          warning: 'hsl(37deg, 100%, 50%)',
        },
      },
    ],
  },
};
