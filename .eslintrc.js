module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    'jest/globals': true,
  },
  rules: {
    'no-proto': 0,
  },
  plugins: ['jest'],
};
