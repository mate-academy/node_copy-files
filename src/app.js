'use strict';

const fs = require('fs');

function copyFile(source, destination) {
  fs.copyFile(source, destination, (err) => {
    if (err) {
      // eslint-disable-next-line
      console.error(`Error copying file: ${err}`);
    } else {
      // eslint-disable-next-line
      console.log(`File copied from ${source} to ${destination}`);
    }
  });
}

const command = process.argv[2];
const sourceFile = process.argv[3];
const destinationFile = process.argv[4];

if (command !== 'cp') {
  // eslint-disable-next-line
  console.error('Invalid command. Use "cp" command to copy files.');

  return;
}

if (sourceFile === destinationFile) {
  // eslint-disable-next-line
  console.log('Source and destination are the same. No action taken.');

  return;
}

if (!sourceFile || !destinationFile) {
  // eslint-disable-next-line
  console.error('Usage: node app.js source.txt destination.txt');
} else {
  copyFile(sourceFile, destinationFile);
}
