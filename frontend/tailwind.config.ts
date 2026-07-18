import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          1: '#BD0FEA',
          2: '#8A05BE',
          3: '#4C0677',
          DEFAULT: '#BD0FEA',
        },
        'master-purple': {
          1: '#820AD1',
          2: '#2F0549',
          DEFAULT: '#820AD1',
        },
        white: '#FFFFFF',
        'off-white': '#F4F4F4',
        grey: {
          1: '#E5E5E5',
          2: '#999999',
          3: '#3C3C3C',
          DEFAULT: '#E5E5E5',
        },
        black: '#000000',
        mustard: '#D6E303',
        coral: '#FF7D6B',
        'light-blue': '#6FF5FF',
      },
    },
  },
  plugins: [],
} satisfies Config;
