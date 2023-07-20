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
          '50': '#ebf9ff',
          '100': '#d2f3ff',
          '200': '#afebff',
          '300': '#78e1ff',
          '400': '#38ceff',
          '500': '#0badff',
          '600': '#0089ff',
          '700': '#0070ff',
          '800': '#005bd4',
          '900': '#024995',
          '950': '#073264'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
};
