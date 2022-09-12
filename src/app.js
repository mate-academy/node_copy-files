'use strict';

const readline = require('readline/promises');
const { copyFile } = require('./file');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

copyFile(terminal).then(() => terminal.close());
