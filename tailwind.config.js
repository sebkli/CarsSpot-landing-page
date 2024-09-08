/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        whiteMain: '#FFFFFF',
        whiteSecondary: '#F7F7F7',
        blackMain: '#000000',
        blackSecondary: '##1D1D1B',
        blueMain: '#0147FF',
        grayMain: '#282828',
        checkboxMain: '#F1F1F1',
      },
    },
    fontFamily: {
      'Bebas-Neue': "'Bebas Neue', sans-serif",
      'Roboto-Flex': "'Roboto Flex',sans-serif",
      'Roboto-Condensed': "'Roboto Condensed' sans-serif",
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
