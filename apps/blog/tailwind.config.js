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
