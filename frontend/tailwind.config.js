/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,vue}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    require("tw-elements/dist/plugin.cjs")
  ],
}

