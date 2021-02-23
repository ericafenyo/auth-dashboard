module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "120": "30rem",
      },
      maxWidth: {
        "120": "30rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
