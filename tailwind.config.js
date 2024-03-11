/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Avenir Next', 'sans-serif'],
        'secondary': ['Lato'],
      },
    },
  },
  plugins: [animations, require("daisyui")],
}
