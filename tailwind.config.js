/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#DFF6FF',
        bgSecondary: '#B4EAFF',
        primary: 'rgb(var(--warna-tema)/ <alpha-value>)',
        primaryDark: '#06283D',
        secondary: '#1363DF',
        secondaryTxt: 'rgba(6, 40, 61, 0.7)',
      },
      fontFamily: {
        Baloo: "'Baloo Tamma 2', cursive",
      },
    },
  },
  plugins: [],
};
