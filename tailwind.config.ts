import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["TheJamsil5Bold"]
      },
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
        },
        up: {
          "0%": { opacity: "50%", transform: "translateY(0px)" },
          "100%": { opacity: "100%", transform: "translateY(-15px)" }
        },
        down: {
          "0%": { opacity: "50%", transform: "translateY(0px)" },
          "100%": { opacity: "100%", transform: "translateY(15px)" }
        }
      },
      animation: {
        swing: "swing 1.3s ease-in-out infinite",
        up: "up 0.7s linear infinite",
        down: "down 0.7s linear infinite"
      }
    }
  },
  plugins: []
};
export default config;
