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
        tertiary: {
          50: '#FFF3E5',
          100: '#FFEAD1',
          200: '#FFD29E',
          300: '#FFBC70',
          400: '#FFA53D',
          500: '#FF8D0A',
          600: '#D17000',
          700: '#9E5400',
          800: '#6B3900',
          900: '#331B00',
          950: '#190E00',
        },
        success: {
          50: '#EAF6EA',
          100: '#D8EED8',
          200: '#ADDBAD',
          300: '#86CA86',
          400: '#5CB85C',
          500: '#46A046',
          600: '#388038',
          700: '#2A602A',
          800: '#1C401C',
          900: '#0E200E',
          950: '#081208',
        },
        danger: {
          50: '#FCF3F2',
          100: '#F9E2E2',
          200: '#F1C2C0',
          300: '#E79592',
          400: '#D9534F',
          500: '#D43F3A',
          600: '#C5302B',
          700: '#B02B26',
          800: '#8F231F',
          900: '#6D1A18',
          950: '#4C1210',
        },
        info: {
          50: '#EEF8FC',
          100: '#DDF2F8',
          200: '#BBE5F1',
          300: '#91D4E9',
          400: '#5BC0DE',
          500: '#3CB3D8',
          600: '#28A2C8',
          700: '#238EAE',
          800: '#1D7590',
          900: '#15566A',
          950: '#0F3E4C',
        },
        warning: {
          50: '#FFFBE5',
          100: '#FFF7C7',
          200: '#FFEF94',
          300: '#FFE44D',
          400: '#FFD700',
          500: '#EBC700',
          600: '#D6B600',
          700: '#BDA000',
          800: '#998200',
          900: '#705F00',
          950: '#524500',
        },
        dark: {
          50: '#F2F2F2',
          100: '#E3E3E3',
          200: '#BFBFBF',
          300: '#8F8F8F',
          400: '#333333',
          500: '#303030',
          600: '#262626',
          700: '#262626',
          800: '#1A1A1A',
          900: '#1A1A1A',
          950: '#000000',
        },
        light: {
          50: '#FCFCFC',
          100: '#FCFCFC',
          200: '#FAFAFA',
          300: '#F7F7F7',
          400: '#F5F5F5',
          500: '#E3E3E3',
          600: '#CCCCCC',
          700: '#B5B5B5',
          800: '#949494',
          900: '#6B6B6B',
          950: '#4F4F4F',
        },
      },
    },
  },
  plugins: [],
};
