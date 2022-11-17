/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src/script.js", "./src/form.html"],
  theme: {
    extend: {
      colors: {
        primary: "#002E00",
        secondary: "#F9F871",
        accent1: "#C8FCEA",
        accent2: "#8685EF",
        popups: "#EA96B2",
        "primary--shade": "#AEEB9C",
        "primary--light": "#6EFF6D",
        "secondary--light": "#EB8B13",
        "accent--light": "#006B5F",
        gray: "#222222",
        dark: "#111111",
      },
      fontFamily: {
        main: ["Work Sans", "sans-serif"],
        secondary: ["Playfair Display", "sans"],
        body: ["Nunito"],
        markerfont: ["Permanent Marker"],
      },
      clipPath: {
        initialShape: "polygon(49% 100%, 100% 100%, 0 100%)",
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
};
