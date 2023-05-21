'use strict';

const fs = require('fs');
const path = require('path');

const sourcePath = process.argv[2];
const destinationPath = process.argv[3];

function copyFile(sourceFilePath, destinationFilePath) {
  const source = path.resolve(sourceFilePath);
  const destination = path.resolve(destinationFilePath);

  if (!fs.existsSync(source)) {
    throw new Error('Source path does not exist!');
  }

  if (fs.existsSync(destination)) {
    throw new Error('Destination path already exists!');
  }

  if (!fs.statSync(source).isFile()) {
    throw new Error('Source is not a file.');
  }

  if (source === destination) {
    throw new Error('Paths are the same!');
  }

  try {
    fs.copyFileSync(source, destination);
  } catch (error) {
    throw new Error(error);
  }
}

copyFile(sourcePath, destinationPath);
