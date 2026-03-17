import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#12305f",
          blue: "#1d5fbf",
          sky: "#5fa8ff",
          gold: "#d89b1d",
          ink: "#172033",
          soft: "#f5f8fc",
          mist: "#e7eef8",
          slate: "#5f6f86",
          panel: "#ffffff",
        },
      },
      boxShadow: {
        card: "0 20px 50px rgba(18, 48, 95, 0.1)",
        "card-soft": "0 12px 30px rgba(23, 32, 51, 0.08)",
      },
      fontFamily: {
        display: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["DM Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 12% 18%, rgba(216, 155, 29, 0.22), transparent 28%), radial-gradient(circle at 88% 16%, rgba(95, 168, 255, 0.18), transparent 30%), linear-gradient(135deg, #12305f 0%, #1d5fbf 58%, #5fa8ff 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
