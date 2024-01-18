/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",
        secondary: "#fea335",
        mainRed: "#E30613",
        primaryalt: "#434343",
        textalt: "#898989",
        maintext: "#575656"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        'instrument-sans': ["Instrument Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
