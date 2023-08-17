'use strict';

const readline = require('readline');
const { stdin, stdout } = require('process');

const cli = readline.createInterface({
  input: stdin,
  output: stdout,
});

module.exports = { cli };
