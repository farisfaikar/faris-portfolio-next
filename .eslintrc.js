module.exports = {
  extends: ["next", "next/core-web-vitals", "eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  rules: {
    "no-undef": "off",
  },
};
