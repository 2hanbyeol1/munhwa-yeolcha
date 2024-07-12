import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      aspectRatio: {
        poster: "9 / 12"
      },
      colors: {
        "dark-red": "#973931",
        coral: "#E5514F",
        beige: "#F0DCC6",
        "prompt-green": "#00FF00",
        green: "#1A764F",
        blue: "#007bd1",
        "withered-diamond": "#76939E",
        "hover-green": "#2BD58D",
        white: "#FFFFFF",
        yellow: "#FFC700",
        transparent: "transparent",
        black: "#000000"
      },
      boxShadow: {
        detail: "inset 0 0 5px"
      },
      keyframes: {
        swing: {
          "0%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
          "100%": { transform: "rotate(-10deg)" }
        }
      },
      animation: {
        swing: "swing 1.3s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
export default config;
