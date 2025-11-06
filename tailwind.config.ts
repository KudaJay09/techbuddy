import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "tb-primary":
          "linear-gradient(7deg, #040C18 0%, #040C7B 50%, #8A2BE2 100%)",
      },
      fontFamily: {
        gotham: ["Gotham", "Arial", "sans-serif"],
        "gotham-light": ["Gotham Light", "Arial", "sans-serif"],
        "gotham-medium": ["Gotham Medium", "Arial", "sans-serif"],
        "gotham-bold": ["Gotham Bold", "Arial", "sans-serif"],
        "gotham-black": ["Gotham Black", "Arial", "sans-serif"],
        "gotham-rounded": ["Gotham Rounded", "Arial", "sans-serif"],
        "gotham-narrow": ["Gotham Narrow", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
