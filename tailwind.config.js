/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      primary: "#339989",
      "primary-light": "#f5faff",
      // "primary-light": "#F9FAFB",

      secondary: "#462514",
      sale: "#F94031",
      third: "#27365C",
      white: "#FFFFFF",
      lightGray: "#F9F9F9",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#FFD000",
      mediumGray: "#4D28141A",
      grayDark: "#A7A8A9",
      description: "#697E95",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      active: "#FEC90C",
      black: colors.black,
      red: colors.red,

      // description: "#697E95",
      // transparent: "transparent",
      // current: "currentColor",
      // customRed: "#E70808",
      // white: colors.white,
      // gray: colors.gray,
      // emerald: colors.emerald,
      // indigo: colors.indigo,
      // yellow: colors.yellow,
    },
    backgroundImage: {
      "points-bg": "url('@/assets/images/pionts-bg.png')",
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [
    // require('tw-elements/dist/plugin')
  ],
};
