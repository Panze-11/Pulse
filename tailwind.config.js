/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Bricolage Grotesque'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        bg: "#09090f",
        surface: "#0d0d16",
        card: "#12121e",
        purple: "#8b5cf6",
        violet: "#a78bfa",
        pink: "#ec4899",
        "text-main": "#f1f0ff",
        "text-muted": "#6b6a80",
        "text-light": "#9d9cb8",
        "border-dim": "rgba(255,255,255,0.07)",
        "border-purple": "rgba(139,92,246,0.15)",
      },
      animation: {
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s cubic-bezier(.4,0,.2,1) forwards",
      },
      keyframes: {
        pulseDot: {
          "0%,100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.4, transform: "scale(0.75)" },
        },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(24px)" },
          to:   { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
