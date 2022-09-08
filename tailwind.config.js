/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Roboto"', 'sans-serif']
    },
    extend: {
      colors: {
        'imagyne-primary': '#00a6e4',
        'imagyne-secondary': '#2c303b',
        'imagyne-accent': '#e5e5e5'
      },
      borderWidth: {
        0.5: 0.5,
      },
    },
  },
  plugins: [],
}
