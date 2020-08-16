module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" },
      },
      colors: {
        "body-dark": "#081226",
      },
    },
  },
  variants: {},
  plugins: [],
};
