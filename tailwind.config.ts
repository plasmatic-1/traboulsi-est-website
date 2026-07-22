import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E3A5F",
          light: "#2C5182",
          dark: "#132840",
          deep: "#0B1220",
        },
        accent: {
          DEFAULT: "#D32F2F",
          dark: "#B02525",
          light: "#F2A6A6",
        },
        surface: "#F6F7F9",
        ink: "#1A2430",
        line: "#E3E7EC",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        xs: "0 1px 2px rgba(16, 24, 40, 0.04)",
        card: "0 1px 2px rgba(16, 24, 40, 0.04), 0 1px 1px rgba(16, 24, 40, 0.03)",
        cardHover:
          "0 20px 40px -16px rgba(30, 58, 95, 0.22), 0 6px 16px -6px rgba(30, 58, 95, 0.12)",
        glow: "0 8px 24px -6px rgba(211, 47, 47, 0.35)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      letterSpacing: {
        tightest2: "-0.035em",
      },
    },
  },
  plugins: [],
};
export default config;
