'use strict';

/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');

function copy() {
  const args = process.argv.slice(2);

  if (args.length !== 2) {
    console.error('Usage: node app.js <sourceFile> <destinationFile>');

    return;
  }

  const sourceFile = path.resolve(args[0]);
  const destinationFile = path.resolve(args[1]);

  // Do nothing if source and destination are the same
  if (sourceFile === destinationFile) {
    return;
  }

  try {
    const sourceStats = fs.statSync(sourceFile);

    if (!sourceStats.isFile()) {
      console.error('Error: Source is not a file.');

      return;
    }
  } catch (err) {
    console.error('Error: Source file does not exist.');

    return;
  }

  try {
    // Overwrites destination file if it already exists
    fs.copyFileSync(sourceFile, destinationFile);
    console.log('copied');
  } catch (err) {
    console.error('Error:', err.message);
  }
}

copy();

module.exports = {
  copy,
};
