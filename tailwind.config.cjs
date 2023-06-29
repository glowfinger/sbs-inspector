/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{svelte,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#024995',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
