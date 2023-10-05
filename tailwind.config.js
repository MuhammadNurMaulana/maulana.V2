/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        toRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(30px)" },
        },
        toLeft: {
          "0%": { transform: "translateX(30px)" },
          "100%": { transform: "translateX(0)" },
        },
        hand: {
          "0%": { transform: "-rotate(7deg)" },
          "50%": { transform: "rotate(18deg)" },
          "100%": { transform: "-rotate(25deg)" },
        },
      },
      animation: {
        toRight: "toRight 1s ease-in-out forwards",
        toLeft: "toLeft 1s ease-in-out forwards",
        hand: "hand 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
