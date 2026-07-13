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
        },
        accent: {
          DEFAULT: "#D32F2F",
          dark: "#B02525",
        },
        surface: "#F5F6F8",
        ink: "#1A2430",
        line: "#E3E7EC",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 10px rgba(30, 58, 95, 0.08)",
        cardHover: "0 10px 30px rgba(30, 58, 95, 0.14)",
      },
    },
  },
  plugins: [],
};
export default config;
