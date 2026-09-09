/* eslint-disable no-console */
'use strict';

const { terminal } = require('./terminal');

const showError = (errorMessage, copyFile) => {
  console.log(errorMessage);
  terminal.question('Try again: ', copyFile);
};

module.exports = { showError };
