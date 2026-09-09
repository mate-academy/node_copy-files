'use strict';
/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');

const copyFile = (src, dest) => {
  const source = path.resolve(src);
  const destination = path.resolve(dest);

  if (source === destination) {
    console.log('Source and destination are the same. Nothing to copy.');

    return;
  }

  fs.copyFile(source, destination, (err) => {
    if (err) {
      console.log(`Error copying file: ${err}`);

      return;
    }

    console.log(`File "${source}" copied to "${destination}" successfully.`);
  });
};

if (process.argv.length !== 4) {
  console.log('Usage: node copyFile.js source destination');
  process.exit(1);
}

const sourceFile = process.argv[2];
const destinationFile = process.argv[3];

copyFile(sourceFile, destinationFile);
