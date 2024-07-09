import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      "dark-red": "#973931",
      coral: "#E5514F",
      beige: "#F0DCC6",
      green: "#1A764F",
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
    extend: {}
  },
  plugins: []
};
export default config;
