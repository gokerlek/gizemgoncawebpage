module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        layout: ["Catamaran", "sans - serif", "Open Sans"],
      },
      transformOrigin: {
        leftButton: "50% 50%",
        rightButton: "24px 50%",
      },
      boxShadow: {
        menu: "0px 0px 96px rgba(0, 0, 0, 0.07), 0px 0px 12.0207px rgba(0, 0, 0, 0.035)",
        gallery:
          "0px 18px 80px rgba(0, 0, 0, 0.07),0px 2.31775px 10.0172px rgba(0, 0, 0, 0.035)",
        leftSidebar: "4px 0px 15px rgba(0, 0, 0, 0.5)",
        rightSidebar: "-4px 0px 15px rgba(0, 0, 0, 0.5)",
      },

      gridTemplateColumns: {
        layout: "max-content 1fr max-content",
      },
      spacing: {
        "80px": "80px",
        top1: "85vh",
        right1: "5vw",
        menu: "900px",
      },
      colors: {
        ggz: {
          100: "#009FB7",
          base: "F5F5F5",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
