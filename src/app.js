/* eslint-disable no-console */
'use strict';

const { copyFile } = require('fs');
const readline = require('readline');
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('What file do you want to copy and where? ', (doublePath) => {
  const pathArr = doublePath.split(' ');

  copyFile(pathArr[0], pathArr[1], (err) => {
    if (err) {
      throw err;
    }
    console.log('copying complete!');
  });
  terminal.close();
});
