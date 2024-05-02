'use strict';

const fs = require('fs');
const path = require('path');

try {
  const sourceFile = process.argv[2];
  const destinationFile = process.argv[3];

  // Check if source and destination paths are the same
  if (path.resolve(sourceFile) === path.resolve(destinationFile)) {
    throw new Error('You are trying to copy to the same location');
  }

  // Check if source file exists
  if (!fs.existsSync(sourceFile)) {
    throw new Error(`Source file '${sourceFile}' does not exist.`);
  }

  fs.copyFileSync(sourceFile, destinationFile);
} catch (err) {
  // eslint-disable-next-line no-console
  console.error(err);
}
