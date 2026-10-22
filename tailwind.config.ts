import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F6F1",
        surface: "#FFFFFF",
        "surface-secondary": "#F3EEF8",
        "surface-dark": "#4F386F",
        border: "#DDD9D0",
        "border-subtle": "#EBE8DF",
        primary: {
          DEFAULT: "#7656A8",
          deep: "#4F386F",
          light: "#E9E1F4",
          soft: "#F3EEF8",
          dark: "#3B2854",
        },
        text: {
          main: "#171717",
          secondary: "#68645E",
          muted: "#8C877E",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      letterSpacing: {
        editorial: "0.08em",
        tightest: "-0.04em",
      },
      animation: {
        ticker: "ticker 35s linear infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
