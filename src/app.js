/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const rl = require('readline');

const terminal = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Please, enter: fileAddress copyesAddress ', (userData) => {
  const [ filePath, copyesPath ] = userData.trim().split(' ');

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
