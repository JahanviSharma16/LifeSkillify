/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        accent: "#10B981",
        bg: "#F9FAFB",
        textMain: "#111827",
        amber: "#F59E0B",
        error: "#EF4444",
        success: "#22C55E",
        info: "#3B82F6",
        grayLight: "#E5E7EB",
        grayMid: "#9CA3AF",
        grayDark: "#374151",
      },
    },
  },
  plugins: [],
};
