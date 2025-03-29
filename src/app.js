/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function copy(source, destination) {
  if (!fs.existsSync(source)) {
    console.error(`Error: Source file "${source}" does not exist.`);

    return;
  }

  if (path.resolve(source) === path.resolve(destination)) {
    console.error(`Error: Source and destination are the same.`);

    return;
  }

  fs.copyFile(source, destination, (err) => {
    if (err) {
      console.error(`Error: Failed to copy file. ${err.message}`);
    }
  });
}

const sourceFile = process.argv[2];
const destinationFile = process.argv[3];

if (!sourceFile || !destinationFile) {
  console.error(`Please enter both source and destination file paths.`);
} else {
  copy(sourceFile, destinationFile);
}
