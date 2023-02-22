/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { copyFile } = require('./copy');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Please provide a source file to copy  ', (source) => {
  terminal.question('Please provide a destination  ', destination => {
    copyFile(source, destination);
    terminal.close();
  });
});
