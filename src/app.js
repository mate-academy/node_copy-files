/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const copy = (sorce, destination) => {
  const sourcePath = path.resolve(sorce);
  const destinationPath = path.resolve(destination);

  if (!fs.existsSync(sourcePath)) {
    console.error('Source file does not exist');
  }

  fs.copyFileSync(sourcePath, destinationPath);
  console.log(`File ${sorce} copied to ${destination}`);
};

const [, , sourceFile, destinationFile] = process.argv;

if (!sourceFile || !destinationFile) {
  console.error('Usage: node app.js <source_file> <destination_file>');
} else {
  try {
    copy(sourceFile, destinationFile);
  } catch (err) {
    console.error(err.message);
  }
}
