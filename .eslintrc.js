module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["xo", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-console": "off",
    "no-alert": "off",
  },
};
