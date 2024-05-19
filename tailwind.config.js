/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      base: "1rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5625rem",
      "2xl": "2.375rem",
      "3xl": "3.375rem",
    },
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        primary: "#FED29C",
      },
    },
  },
  plugins: [],
};
