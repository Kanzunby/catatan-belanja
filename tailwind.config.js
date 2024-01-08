/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        borel: "Borel",
      },
      colors: {
        primary: "#283618",
        scond: "#606c38",
        background: "#fefae0",
        background1: "#dda15e",
        background2: "#bc6c25",
      },
    },
  },
  plugins: [],
};
