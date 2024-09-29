/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const source = process.argv[2];
const destination = process.argv[3];
const commandLineLength = process.argv.slice(2).length;

const copyFiles = (fileToCopy, destinationToCopy) => {
  const fileToCopyPath = path.resolve(fileToCopy);
  const destinationToCopyPath = path.resolve(destinationToCopy);

  if (fileToCopyPath === destinationToCopyPath) {
    return;
  }

  if (!fs.existsSync(fileToCopy)) {
    console.error('File not exist!');
  } else {
    fs.cp(fileToCopyPath, destinationToCopyPath, (error) => {
      console.error(error);
    });
    console.log('A copy of the file was created successfully!');
  }
};

if (commandLineLength !== 2) {
  console.error('Two arguments must be provided!');
} else {
  copyFiles(source, destination);
}
