module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transformOrigin: {
        0: "0%",
      },
      zIndex: {
        "-1": "-1",
      },
      colors: {
        "custom-blue": "#2296F3",
        "custom-white": "#FAFAFA",
        "custom-gray": {
          primary: "#B0C4D8",
          light: "#9EB7D7",
          secondary: "#D5D7D9",
          dark: "#9C9A9B",
        },
        "custom-green": "#318BA5",
      },
    },
  },
  variants: {
    borderColor: ["responsive", "hover", "focus", "focus-within"],
    transform: ["hover", "focus"],
    extend: {},
  },
  plugins: [],
};
