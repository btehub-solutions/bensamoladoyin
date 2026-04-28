import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-bg": "#000000",
        "dark-surface": "#000000",
        "dark-card": "#000000",
        "dark-border": "rgba(255, 255, 255, 0.05)",
        "light-bg": "#F5F7FA",
        "light-surface": "#FFFFFF",
        "light-card": "#FFFFFF",
        "light-border": "rgba(0, 0, 0, 0.05)",
        "accent-violet": "#FFFFFF",
        "accent-cyan": "#A1A1A1",
        "accent-glow": "rgba(255, 255, 255, 0.05)",
        "text-primary-dark": "#FFFFFF",
        "text-muted-dark": "#A1A1A1",
        "text-primary-light": "#000000",
        "text-muted-light": "#666666",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse at center, rgba(108,99,255,0.15) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
