import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: ['class', '[data-theme^="dark-"]'],
  plugins: [
    require('tailwindcss-animate'),
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              '50': '#e3e2e2',
              '100': '#bcbaba',
              '200': '#949292',
              '300': '#6d6a6a',
              '400': '#454141',
              '500': '#1e1919',
              '600': '#191515',
              '700': '#141010',
              '800': '#0e0c0c',
              '900': '#090808',
              foreground: '#fff',
              DEFAULT: '#1e1919'
            },
            secondary: {
              '50': '#fffefe',
              '100': '#fffefe',
              '200': '#fffdfd',
              '300': '#fffcfc',
              '400': '#fffbfb',
              '500': '#fffafa',
              '600': '#d2cece',
              '700': '#a6a3a3',
              '800': '#797777',
              '900': '#4d4b4b',
              foreground: '#000',
              DEFAULT: '#fffafa'
            }
          }
        }
      },
      layout: {
        radius: {
          small: '0.75rem',
          medium: '1.125rem',
          large: '1.875rem'
        }
      }
    })
  ]
} satisfies Config;

export default config;
