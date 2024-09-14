/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '412px',   // Extra small devices (phones)
        'sm': '640px',   // Small devices (phones)
        'md': '768px',   // Medium devices (tablets)
        'lg': '1024px',  // Large devices (desktops)
        'xl': '1280px',  // Extra large devices (large desktops)
        '2xl': '1536px', // 2X large devices (larger desktops)
      },
      colors: {
        'dark-blue': "#0C031C",
        'mid-blue': "#2E1D62",
        'mint-green': "#5FEE83",
        'apple-green': "#A0E5BF",
        'app-white': "#e5e7eb",
        'app-black': "#0c031c",
        'app-orange': "#ea580c",
      },
      fontSize: {
        'app' : '15px'
      }
    },
  },
  plugins: [],
}