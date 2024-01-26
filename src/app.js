/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const filePath = process.argv[2];
const destination = process.argv[3];

if (filePath !== destination) {
  copyFile(filePath, destination);
}

function copyFile(source, dest) {
  if (!isValidLocation(source, dest)) {
    console.log('Invalid destination. The source and destination must have different names and locations.');

    return;
  }

  if (!fs.existsSync(source)) {
    console.error(`Error: Source file ${source} does not exist.`);

    return;
  }

  fs.copyFile(source, dest, (error) => {
    if (error) {
      console.error(`Error copying file from ${source} to ${dest}: ${error.message}`);
    } else {
      console.log(`File copied from ${source} to ${dest}`);
    }
  });
}

function isValidLocation(filePathToCopy, newfilePathToCopy) {
  const oldLocation = filePathToCopy.split('/');
  const newLocation = newfilePathToCopy.split('/');

  const oldFileName = oldLocation.pop();
  const newFileName = newLocation.pop();

  return oldFileName !== newFileName && JSON.stringify(oldLocation) !== JSON.stringify(newLocation);
}
