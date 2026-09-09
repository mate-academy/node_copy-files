/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(src, dest) {
  if (path.resolve(src) === path.resolve(dest)) {
    return console.log('Source and destination are the same. No action taken.');
  }

  fs.copyFile(src, dest, fs.constants.COPYFILE_FICLONE, (err) => {
    if (err) {
      return console.error('Error copying file:', err);
    }
    console.log('File copied successfully.');
  });
}

const sourceFilePath = process.argv[2];
const destinationFilePath = process.argv[3];

if (!sourceFilePath || !destinationFilePath) {
  console.error('Please provide both source and destination file paths.');
} else {
  copyFile(sourceFilePath, destinationFilePath);
}
