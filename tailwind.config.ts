import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accentLight: "#E0EDF5",
        accentDark: "#28617F",
        backgroundLight: "#E0EDF5",
        textDark: "#003554",
        textLight: "#486A6C",
      },
      fontFamily: {
        material: ["Material Symbols Rounded", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
