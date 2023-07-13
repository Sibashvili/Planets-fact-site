/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        whitergba: "rgba(255, 255, 255, 0.5)",
        textrgba: "rgba(255, 255, 255, 0.5)",
      },
    },
    fontFamily: {
      antonio: ["Antonio, sans-serif"],
      spartan: ["League Spartan, sans-serif"],
    },
  },
  plugins: [],
};
