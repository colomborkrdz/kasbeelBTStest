/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arialNarrow: ['arialNarrow']
      },
      keyframes: {
        flipback: {
          "0%": { transform: "rotateY(180deg)" }
        }
      },
      animation: {
        flipback: "flipback 200ms ease-in-out"
      }
    }
  }
}