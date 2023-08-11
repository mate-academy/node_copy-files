'use strict';
/* eslint-disable no-console */
require('colors');

const notification = {
  warning: (message) => console.log(message.yellow),
  error: (message) => console.log(message.red),
  success: (message) => console.log(message.green),
};

module.exports = { notification };
