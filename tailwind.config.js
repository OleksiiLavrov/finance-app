/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
        "4xl": "2500px",
      },
      width: {
        600: "600px",
        1050: "1050px",
        2000: "2000px",
      },
    },
  },
  plugins: [],
};
