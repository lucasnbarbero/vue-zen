/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E5F6FF',
          100: '#D1F0FF',
          200: '#9EDFFF',
          300: '#70CFFF',
          400: '#3DBDFF',
          500: '#0AADFF',
          600: '#008BD1',
          700: '#00699E',
          800: '#00476B',
          900: '#002233',
          950: '#001119',
        },
        secondary: {
          50: '#F3EDF7',
          100: '#E7DCEF',
          200: '#D1BCE1',
          300: '#B999D1',
          400: '#A176C1',
          500: '#8853B1',
          600: '#6E4190',
          700: '#53316D',
          800: '#362046',
          900: '#1B1023',
          950: '#0D0812',
        },
      },
    },
  },
  plugins: [],
};
