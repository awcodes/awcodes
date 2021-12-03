const { lime } = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

const brandColors = {
  primary: {
    50: "#fff7f6",
    100: "#ffefed",
    200: "#ffd8d1",
    300: "#ffc1b5",
    400: "#ff927e",
    500: "#ff6347",
    600: "#e65940",
    700: "#bf4a35",
    800: "#993b2b",
    900: "#7d3123",
  },
  secondary: {
    50: "#fbf4f4",
    100: "#f7e9e9",
    200: "#ecc8c8",
    300: "#e0a7a7",
    400: "#c96464",
    500: "#b22222",
    600: "#a01f1f",
    700: "#861a1a",
    800: "#6b1414",
    900: "#571111",
  },
};

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: { ...brandColors },
      fontFamily: {
        display: ["Denk One", ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
