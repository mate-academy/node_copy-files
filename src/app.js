/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(sourcePath, destinationPath) {
  const sourceFilename = path.basename(sourcePath);
  const destinationFilename = path.basename(destinationPath);

  if (path.resolve(sourcePath) === path.resolve(destinationPath)) {
    console.log('Source and destination are the same. No action needed.');

    return;
  }

  fs.readFile(sourcePath, (error, data) => {
    if (error) {
      console.error(`Error reading file: ${error}`);

      return;
    }

    fs.writeFile(destinationPath, data, (err) => {
      if (err) {
        console.error(`Error writing file: ${err}`);

        return;
      }

      console.log(
        `Copied ${sourceFilename} to ${destinationFilename} successfully.`
      );
    });
  });
}

const sourceFile = process.argv[2];
const destinationFile = process.argv[3];

if (!sourceFile || !destinationFile) {
  console.log('Usage: node app.js sourceFile destinationFile');
} else {
  copyFile(sourceFile, destinationFile);
}
