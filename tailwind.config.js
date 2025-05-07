/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00CED1",
        Background: "#000000",
        darkshade: "#00191a",
        grayMid: "#A0A0A0",
      },
      backgroundImage: {
        "black-to-green": "linear-gradient(to right, #000000, #bf00ff33)",
      },
    },
  },
  plugins: [],
};
