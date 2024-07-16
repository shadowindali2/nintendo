/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#484848',
        'secondary': '#E60012',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("tailwindcss-animate")
  ],
}