/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const [, , sourceFile, destinationFile] = process.argv;

function copyFile() {
  if (!sourceFile || !destinationFile) {
    console.error('Usage: node app.js <sourceFile> <destinationFile>');

    return;
  }

  if (path.resolve(sourceFile) === path.resolve(destinationFile)) {
    console.log('Source and destination are the same. Nothing to copy.');

    return;
  }

  fs.readFile(sourceFile, (err, data) => {
    if (err) {
      console.error('Error reading source file:', err);

      return;
    }

    fs.writeFile(destinationFile, data, (error) => {
      if (error) {
        console.error('Error writing to destination file:', err);

        return;
      }

      console.log(`File copied from ${sourceFile} to ${destinationFile}`);
    });
  });
}

copyFile();

module.exports = {
  copyFile: copyFile,
};
