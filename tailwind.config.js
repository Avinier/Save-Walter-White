/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src/script.js"],
  theme: {
    extend: {
      colors: {
        primary: "#002E00",
        secondary: "#FAFB40",
        accent1: "#C3FCF1",
        accent2: "#185357",
        popups: "#EA96B2",
        "primary--shade": "#AEEB9C",
        "primary--light": "#6EFF6D",
        "secondary--light": "#EB8B13",
        "accent--light": "#006B5F",
        gray: "#222222",
      },
      fontFamily: {
        main: ["Work Sans", "sans-serif"],
        secondary: ["Playfair Display", "sans"],
        body: ["Nunito"],
      },
    },
  },
  plugins: [],
};
