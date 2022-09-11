/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const rl = require('readline');

const terminal = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Enter: Address ', (data) => {
  const [ filePath, copyesPath ] = data.trim().split(' ');

  terminal.close();

  if (filePath !== copyesPath) {
    fs.copyFile(filePath, copyesPath, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Succesfully');
      }
    });
  }
});
