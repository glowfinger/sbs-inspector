/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{svelte,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#82BBFD",
          100: "#70B1FD",
          200: "#4D9FFD",
          300: "#2A8DFC",
          400: "#067AFC",
          500: "#036ADB",
          600: "#025AB8",
          700: "#024995",
          800: "#013163",
          900: "#011830",
          950: "#000C17"
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
};
