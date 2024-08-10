import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        flare: {
          '0%': {
            left: '-150%',
          },
          '100%': {
            left: '150%',
          },
        },
      },
      animation: {
        flare: 'flare 3s infinite linear',
      },
      maxWidth: {
        container: '1136px',
        '6.5/12': '54.16%',
        '1/2': '50%',
      },
      width: {
        '6.5/12': '54.16%',
      },
      fontFamily: {
        Geologica: 'Geologica Roman',
      },
      colors: {
        mainBlue: '#004EFF',
        cardGray: '#F6F7FB',
        dark: '#0C0B0E',
        blueGray: '#7288A5',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        body: {
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '12px',
            backgroundColor: '#2563eb',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#bfdbfes',
          },
        },
        '._container': {
          width: '100%',
          maxWidth: '1136px',
          margin: '0 auto',
          '@media(max-width: 1156px)': {
            padding: '0 20px',
          },
        },
        '.title-section': {
          fontWeight: 'bold',
          lineHeight: '33px',
          fontSize: '28px',
          '@screen md': {
            lineHeight: '48px',
            fontSize: '40px',
          },
        },
      });
    }),
  ],
};
