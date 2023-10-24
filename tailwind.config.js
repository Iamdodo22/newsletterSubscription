/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      colors:{
        Tomato: 'hsl(4, 100%, 67%)',
        DarkGrey:' hsl(234, 29%, 20%)',
        CharcoalGrey: 'hsl(235, 18%, 26%)',
        Grey:'hsl(231, 7%, 60%)',
        pWhite:'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}

