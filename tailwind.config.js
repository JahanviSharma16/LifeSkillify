/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C1917",
        primaryLight: "#F5F5F4",
        primaryDark: "#0C0A09",
        accent: "#A68B4B",
        accentLight: "#F7F3EB",
        accentDark: "#8B7340",
        Background: "#FAF9F7",
        surface: "#FFFFFF",
        surfaceAlt: "#F5F3EF",
        darkshade: "#F0EBE3",
        grayMid: "#78716C",
        grayDark: "#44403C",
        grayLight: "#E7E5E4",
        text: "#1C1917",
        amber: "#C9A227",
      },
      fontFamily: {
        sans: ["MonaSans-Regular", "system-ui", "sans-serif"],
        medium: ["MonaSans-Medium", "system-ui", "sans-serif"],
        bold: ["MonaSans-Bold", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(28, 25, 23, 0.06), 0 10px 20px -2px rgba(28, 25, 23, 0.04)",
        card: "0 4px 6px -1px rgba(28, 25, 23, 0.05), 0 2px 4px -2px rgba(28, 25, 23, 0.04)",
        elevated: "0 20px 40px -12px rgba(28, 25, 23, 0.12), 0 8px 16px -8px rgba(28, 25, 23, 0.06)",
        gold: "0 4px 20px -4px rgba(166, 139, 75, 0.25)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(160deg, #FAF9F7 0%, #F5F3EF 45%, #F0EBE3 100%)",
        "card-gradient": "linear-gradient(135deg, #FFFFFF 0%, #F7F3EB 100%)",
        "cta-gradient": "linear-gradient(135deg, #1C1917 0%, #292524 50%, #1C1917 100%)",
      },
    },
  },
  plugins: [],
};
