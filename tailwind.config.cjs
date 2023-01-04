/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        dark: "#1D1B1D",
        white: "#FEFEFE",
        black: "#111111",
        mdGray: "#757575",
        lightGray: "#E5E5E5",
        ligtherGray: "#EFEFEF",
        gray: "#242324",
        "gray-900": "#343234",
        "gray-700": "#4d4c4d",
        special: "#FE5D00",
        lightRed: "#FFF3F4",
        red: "#E30613",
        whiteGray: "#111111",
        whiteAlt: "#F9FAFB",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
