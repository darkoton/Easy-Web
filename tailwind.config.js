import plugin from 'tailwindcss/plugin';

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
    plugin(function ({ addUtilities, addComponents }) {
      addUtilities({
        '._container': {
          width: '100%',
          maxWidth: '1136px',
          margin: '0 auto',
          padding: '0 16px',
        },
      });
      addComponents({
        '.btn': {
          fontWeight: 'bold',
          fontSize: '1rem',
          transition: 'all 0.2s ease',
          backgroundColor: '#004EFF',
          color: '#FFFFFF',
          borderRadius: '1rem',
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem',
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
          cursor: 'pointer',
          '&:hover': {
            transform: 'scale(1.02)',
          },
          '&:active': {
            transform: 'translateY(0.125rem)',
          },
        },
        '@screen sm': {
          '.btn': {
            paddingTop: '0.75rem',
            paddingBottom: '0.75rem',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
          },
        },
      });
    }),
  ],
};
