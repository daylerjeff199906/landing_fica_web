/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#2FC317",
        secondary: "#A70D3B",
        cerisered: "#F83C86",
      },
    },
    fontFamily: {
      roboto: ["Roboto"],
      redhat: ["Red Hat Display"],
      inter: ["Inter"],
      sans: ["Open Sans","sans-serif"],
      mergeOne: ['Merge One', 'sans-serif'],
    },
  },

  plugins: [require("flowbite/plugin")],
};
