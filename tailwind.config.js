/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
        colors: {
            'dash-blue': '#0d5f9a',
            'link': '#346BD5',
            'light-green': '#DDEFE0',
            'light-beige': '#F4ECDD',
            'light-red': '#EFDADA',
            'light-purple': '#DEE0EF',
            'light-blue': '#519BD0'
        }
    },
  },
  plugins: [
      require('@tailwindcss/forms')
  ],
}
