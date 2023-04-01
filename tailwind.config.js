/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
     
    },
    colors:{
      primary:"rgb(243, 209, 147)",
      secondary:"rgb(44, 44, 102)",
      tertiary:"rgb(245, 245, 218)"
    },
    screens:{
      sm:"480px",
      md:"920px",
      lg:"976px",
      xl:"1440px"
    }
  },
  plugins: [],
}

