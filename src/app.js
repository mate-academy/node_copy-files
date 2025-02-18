/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(source, destination) {
  try {
    if (!source || !destination) {
      throw new Error('Source and destination files must be provided.');
    }

    if (path.resolve(source) === path.resolve(destination)) {
      return;
    }

    if (!fs.existsSync(source)) {
      throw new Error('Source file does not exist.');
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
