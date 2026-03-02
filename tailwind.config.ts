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
        primary: "#0B2B5E",    // Deep blue
        accent: "#00A896",     // Teal/Green
        accentLight: "#02C39A",
      },
    },
  },
  plugins: [],
};
export default config;
