/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        skysoft: {
          50: "#F3FAFF",
          100: "#E6F6FF",
          200: "#CDEEFF",
          300: "#AEE3FF",
          400: "#7FD2FF",
          500: "#46BBFF",
          600: "#149CFF",
        },
        pinkpop: {
          400: "#FF5DB1",
          500: "#FF2E9A",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
