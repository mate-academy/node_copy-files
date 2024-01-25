'use strict';

const fs = require('fs');
const path = require('path');
const { argv } = require('process');

function copyFiles(file, destination) {
  if (!file || !destination) {
    throw new Error('Provide filepaths');
  }

  const filePath = path.join(__dirname, file);
  const destinationPath = path.join(__dirname, destination);

  if (filePath === destinationPath) {
    return;
  }

  fs.copyFile(filePath, destinationPath, (err) => {
    throw new Error(err);
  });
}

const [pathToCopy, pathToPaste] = argv.slice(2);

copyFiles(pathToCopy, pathToPaste);
