/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      width: '85%',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    colors: {
      primary: "#EAD152",
      secondary: "#32343D",
      bg: "#3E2723",
      menu: "#FFF5E2",
      gray: "#64748b",
      white: "#ffffff",
      black: "#000000",
      maroon: "#652F1E",
      footer:"#3A1E1E",
      cta:"#652F1E",
      ctabutton:"#FFA500",
    },
    extend: {},
  },
  plugins: [],
}
