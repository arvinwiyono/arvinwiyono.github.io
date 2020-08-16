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
      boxShadow: {
        "lg-pink":
          "0 10px 15px -3px rgba(251, 182, 206, 0.3), 0 4px 6px -2px rgba(251, 182, 206, 0.15)",
      },
    },
  },
  variants: {},
  plugins: [],
};
