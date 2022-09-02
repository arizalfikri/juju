module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/views/**/*.{js,jsx,ts,tsx}",
    "./src/component/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          1: "#474ed7",
          2: "#032c69",
          3: "#353580",
          4: "#424fc8",
          DEFAULT: "#20215a",
        },
        white: {
          1: "#f7f7f7c0",
          DEFAULT: "#ffffff",
        },
        gray: {
          1: "#f7f7f7",
          DEFAULT: "#696969",
        },
      },
      width: {
        base: "480px",
      },
      maxWidth: {
        480: "480px",
      },
      dropShadow: {
        base: "0px 4px 24px rgba(0, 0, 0, 0.06)",
        "1xl": "0px 2px 5px -1px rgba(0,0,0,0.71)",
      },
      backgroundImage: {
        status: "url('../public/img/kucing.jpg')",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [],
};
