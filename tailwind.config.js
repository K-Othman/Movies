/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main_color: "#10141F",
        nav_color: "#161D2F",
        text_color: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
