/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  safelist: [
    {
      pattern: /motion-delay-\[\d+ms\]/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-motion')],
}