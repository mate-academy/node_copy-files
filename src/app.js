/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function copyFile() {
  const source = process.argv[2];
  const destination = process.argv[3];

  if (!source || !destination) {
    console.error('Error: Please provide both source and destination paths.');

    return;
  }

  try {
    if (!fs.existsSync(source)) {
      console.error(`Error: Source file "${source}" does not exist.`);

      return;
    }

    if (!fs.lstatSync(source).isFile()) {
      console.error('Error: Only files can be copied.');

      return;
    }

    const absSource = path.resolve(source);
    const absDestination = path.resolve(destination);

    if (absSource === absDestination) {
      return;
    }

    fs.copyFileSync(absSource, absDestination);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

copyFile();

module.exports = { copyFile };
