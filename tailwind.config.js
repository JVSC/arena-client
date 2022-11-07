/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#66428A",
          50: "#C2ACD7",
          100: "#B89ED1",
          200: "#A383C4",
          300: "#8F67B6",
          400: "#7A4FA6",
          500: "#66428A",
          600: "#4A3064",
          700: "#2E1E3E",
          800: "#120C18",
          900: "#000000",
        },
        secondary: {
          DEFAULT: "#D94F70",
          50: "#FAE6EB",
          100: "#F6D5DD",
          200: "#EFB4C2",
          300: "#E792A7",
          400: "#E0718B",
          500: "#D94F70",
          600: "#C52B50",
          700: "#97213D",
          800: "#69172A",
          900: "#3B0D18",
        },
      },
    },
  },
  plugins: [],
};
