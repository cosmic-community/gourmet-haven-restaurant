/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B4513',
          50: '#F5E6D3',
          100: '#EDD7BF',
          200: '#DDB896',
          300: '#CD996D',
          400: '#BD7A44',
          500: '#8B4513',
          600: '#6D360F',
          700: '#4F270B',
          800: '#311807',
          900: '#130903',
        },
        secondary: {
          DEFAULT: '#D2691E',
          50: '#F9EAE0',
          100: '#F5DFCF',
          200: '#EDC8AD',
          300: '#E5B18B',
          400: '#DD9A69',
          500: '#D2691E',
          600: '#A85217',
          700: '#7D3C11',
          800: '#53270B',
          900: '#291205',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}