/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   safelist: [
      "bg-category-other",
      "bg-category-food",
      "bg-category-transport",
      "bg-category-sport",
      "bg-category-house",
      "bg-category-subscriptions",
   ],
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
         colors: {
            category: {
               other: "#6900d9",
               food: "#0dbd28",
               transport: "#d6d92e",
               sport: "#EF1C22",
               house: "#3c76c7",
               subscriptions: "#EF1CD0",
            },
         },
      },
   },
   plugins: [],
};
