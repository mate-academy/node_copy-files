module.exports = {
  extends: '@mate-academy/eslint-config',
  sourceType: 'module',
  env: {
    jest: true
  },
  rules: {
    'no-proto': 0
  },
  plugins: ['jest']
};
