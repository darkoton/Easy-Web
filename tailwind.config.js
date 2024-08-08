/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        container: '1136px',
        '6.5/12': '54.16%',
        '1/2': '50%',
      },
      width: {
        '6.5/12': '54.16%',
      },
      colors: {
        mainBlue: '#004EFF',
        cardGray: '#F6F7FB',
        dark: '#0C0B0E',
        blueGray: '#7288A5',
      },
    },
  },
  plugins: [],
};
