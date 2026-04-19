import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        court: {
          green:  "#2d6a4f",
          line:   "#ffffff",
          shadow: "#1b4332",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "shuttle-arc": {
          "0%":   { transform: "translateX(0)   translateY(0)   rotate(0deg)" },
          "50%":  { transform: "translateX(50%)  translateY(-40px) rotate(30deg)" },
          "100%": { transform: "translateX(100%) translateY(0)   rotate(60deg)" },
        },
      },
      animation: {
        "shuttle-arc": "shuttle-arc 1.8s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
