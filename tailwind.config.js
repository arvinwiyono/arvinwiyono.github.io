module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" },
      },
      backgroundColor: {
        body: "var(--body-background)",
      },
      textColor: {
        "link-visited": "var(--link-visted)",
        "link-hover": "var(--link-hover)",
        "body-text-primary": "var(--body-text-primary)",
        "body-text-secondary": "var(--body-text-secondary)",
        "footer-text": "var(--footer-text)",
      },
      boxShadow: {
        "lg-pink":
          "0 10px 15px -3px rgba(251, 182, 206, 0.2), 0 4px 6px -2px rgba(251, 182, 206, 0.1)",
      },
    },
  },
  variants: {},
  plugins: [],
};
