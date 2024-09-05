/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(source, destination) {
  if (path.resolve(source) === path.resolve(destination)) {
    console.error(
      // eslint-disable-next-line max-len
      'Error: Source and destination cannot be the same. Copy operation canceled.',
    );

    return;
  }

  fs.copyFile(source, destination, (err) => {
    if (err) {
      console.error(`Error during file copy: ${err.message}`);

      return;
    }
    console.log(`File successfully copied from ${source} to ${destination}`);
  });
}

const args = process.argv.slice(2);
const [sourceFile, destinationFile] = args;

if (!sourceFile || !destinationFile) {
  console.error(
    'Error: Source and destination must be specified for file copy.',
  );
  console.error('Usage: node app.js <source> <destination>');
} else {
  copyFile(sourceFile, destinationFile);
}
