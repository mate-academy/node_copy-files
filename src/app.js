/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(source, destination) {
  const sourcePath = path.resolve(source);
  const destinationPath = path.resolve(destination);

  if (sourcePath === destinationPath) {
    console.log('Source and destination are the same. Nothing to do.');

    return;
  }

  fs.readFile(sourcePath, (err, data) => {
    if (err) {
      console.error(`Error reading source file: ${err}`);

      return;
    }

    fs.writeFile(destinationPath, data, (error) => {
      if (error) {
        console.error(`Error writing to destination file: ${error}`);

        return;
      }

      console.log(`File copied from ${sourcePath} to ${destinationPath}`);
    });
  });
}

if (process.argv.length !== 4) {
  console.error('Usage: node app.js <source> <destination>');
} else {
  const sourceFile = process.argv[2];
  const destinationFile = process.argv[3];

  copyFile(sourceFile, destinationFile);
}
