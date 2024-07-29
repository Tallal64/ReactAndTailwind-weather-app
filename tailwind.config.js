/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "poppins",
        montserrat: "montserrat",
      },
    },
  },
  plugins: [],
};
