/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFile(sourcePath, destinationPath) {
  if (sourcePath === destinationPath) {
    console.log(
      'You are trying to move the file in a place where it\'s already placed!'
    );

    return;
  }

  fs.copyFileSync(sourcePath, destinationPath);
  console.log('File copied successfully!');
}

copyFile('./src/file.txt', './src/file-copy.txt');
