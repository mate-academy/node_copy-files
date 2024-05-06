'use strict';
/* eslint-disable no-console */

const path = require('path');
const fs = require('fs');

function copyFile(source, destination) {
  const sourcePath = path.resolve(source);
  const destinationPath = path.resolve(destination);

  if (sourcePath === destinationPath) {
    console.error('Error: Source and destination are the same.');

    return;
  }

  if (!fs.existsSync(sourcePath)) {
    console.error(`Error: Source file "${sourcePath}" does not exist.`);

    return;
  }

  const sourceStats = fs.statSync(sourcePath);

  if (sourceStats.isDirectory()) {
    console.error(`Error: "${sourcePath}" is not a file.`);

    return;
  }

  if (
    fs.existsSync(destinationPath) &&
    fs.statSync(destinationPath).isDirectory()
  ) {
    console.error(`Error: Destination "${destination}" is a directory.`);

    return;
  }

  fs.copyFileSync(sourcePath, destinationPath);
}

module.exports = {
  copyFile,
};
