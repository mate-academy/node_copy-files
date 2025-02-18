/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(source, destination) {
  try {
    if (path.resolve(source) === path.resolve(destination)) {
      return;
    }

    if (!fs.statSync(source).isFile()) {
      throw new Error('Source path must be a file.');
    }

    fs.copyFileSync(source, destination);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

const [, , sourceFile, destinationFile] = process.argv;

copyFile(sourceFile, destinationFile);
