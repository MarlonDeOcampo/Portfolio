/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#232323",
        secondary: "#8c8c8c",
        "primary-orange": "#ff652f",
        "primary-green": "#00ff99",
        "primary-yellow": "#ffe400",
      },
      fontFamily: {
        display: ["Roboto Condensed", "sans-serif"],
      },
      backgroundImage: {
        main: "url('/src/assets/main-bg.jpg')",
      },
    },
  },
  plugins: [],
};
