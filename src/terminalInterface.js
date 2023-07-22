'use strict';

const readline = require('readline');

const terminalInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = { terminalInterface };
