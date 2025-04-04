/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      font:["Montserrat", "sans-serif"]// Register Poppins as a font class
    },},
  },
  plugins: [],
}