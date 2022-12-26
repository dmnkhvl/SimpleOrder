/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SF Pro Display", "sans-serif"],
      },
      colors: {
        dark: "#0B0E11",
        white: "#DEE3EA",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
