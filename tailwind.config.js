/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        accent: "#00f5d4",
        softWhite: "#f5f5f5",
        accentPurple: "#8a2be2",
        accentBlue: "#00bfff",
        accentCrimson: "#dc143c",
        accentPink: "#ffb6c1",
        accentAmber: "#ffbf00",
        accentGold: "#ffd700",
        accentLime: "#32cd32",
        accentTeal: "#008080",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      animation: {
        "glow-pulse": "glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fade-in 1s ease-out forwards",
        "slide-up": "slide-up 0.5s ease-out forwards",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: 0.5, filter: "blur(10px)" },
          "50%": { opacity: 1, filter: "blur(20px)" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "slide-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}
