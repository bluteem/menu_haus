// tailwind.config.js

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Customize your colors here
        primary: '#FF0000',
        secondary: '#00FF00',
        // Add more custom colors as needed
      },
      fontFamily: {
        // Customize your fonts here
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        // Add more custom font families as needed
      },
      // Add more theme customization options as needed
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}