'use strict';

const fs = require('fs');
const path = require('path');

const sourcePath = process.argv[2];
const destinationPath = process.argv[3];

copyFile(sourcePath, destinationPath);

function copyFile(sourceFilePath, destinationFilePath) {
  const source = path.resolve(sourceFilePath);
  const destination = path.resolve(destinationFilePath);

  if (source === destination) {
    throw new Error('Source and destination paths are the same');
  }

  if (!fs.existsSync(source)) {
    throw new Error('Source file not found.');
  }

  const sourceStats = fs.statSync(source);

  if (!sourceStats.isFile()) {
    throw new Error('Source path is not a file.');
  }

  if (fs.existsSync(destination)) {
    throw new Error('Destination file already exists.');
  }

  try {
    fs.copyFileSync(source, destination);

    process.stdout.write('File copied successfully.');
  } catch (error) {
    throw new Error('Error copying file:', error);
  }
}
