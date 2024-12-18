/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        PCtitle: "#F2911B",
        PCcontent: "#730202",
        PCSubcontent: "#D9AB91",
        PCbase: "#9FA669",
        Pcbg: "#1D1D1D",
        PcIconps: "#0CABA8",
        PCcontentBg: "#363636",

      }
    },
  },
  plugins: [],
}

