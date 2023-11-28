module.exports = {
  extends: '@mate-academy/eslint-config',
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    'no-proto': 0
  },
  plugins: ['jest']
};
