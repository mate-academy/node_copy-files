/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(fromFile, toFile) {
  const fromFilePath = path.resolve(fromFile);
  const toFilePath = path.resolve(toFile);

  if (fromFilePath === toFilePath) {
    return console.error('Source and destination are same');
  }

  fs.copyFile(fromFilePath, toFilePath, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('File is copied successfully!');
    }
  });
}

const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error('Error');
} else {
  const fromFile = args[0];
  const toFile = args[1];

  copyFile(fromFile, toFile);
}
