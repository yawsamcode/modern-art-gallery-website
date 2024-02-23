/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Outfit': ['Outfit', 'sans-serif'],
        'BigShoulders': ['Big Shoulders Display', 'sans-serif']
      }, 
      colors: {
        'Gold': '#D5966C',
        'Almost-Black': '#151515',
        'Dark Grey': '#444444',
        'Galley-White': '#FCFAF9'
      }

    },
  },
  plugins: [],
};
