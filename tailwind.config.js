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
      },
      animation: {
        toRight: "toRight 1s ease-in-out forwards",
        toLeft: "toLeft 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
