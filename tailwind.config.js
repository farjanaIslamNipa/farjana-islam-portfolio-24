/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': "#0C031C",
        'mid-blue': "#2E1D62",
        'mint-green': "#5FEE83",
        'apple-green': "#A0E5BF",
      }
    },
  },
  plugins: [],
}