module.exports = {
  purge: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        dark: "#000000",
        blue: "#3982d3",
        gray: "#f3f4f6",
        "font-title-color": "rgb(75, 85, 99)",
        warning: "#fdb900",
        danger: "#f60000",
        green: "#009f7f",
      },
    },
  },
  plugins: [],
};
