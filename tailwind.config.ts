import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f3f2fa",
        ink: "#34375c",
        muted: "#6d7195",
        line: "rgba(109,113,149,0.22)",
        card: "#ffffff",
        accent: "var(--accent)",
        lav: "#e7e4f9",
        mint: "#def0e6",
        peach: "#fbe8da",
        paper: "#f3f2fa",
        success: "#2fbf83",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "sans-serif"],
        sans: ["var(--font-instrument)", "Helvetica", "Arial", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
        hand: ["var(--font-boldmatte)", "sans-serif"],
      },
      transitionTimingFunction: {
        swift: "cubic-bezier(.25,.1,.25,1)",
      },
    },
  },
  plugins: [],
};
export default config;
