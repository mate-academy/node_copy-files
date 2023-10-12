'use strict';

/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');

function copyFile(sourcePath, destinationPath) {
  const fileName = path.basename(sourcePath);

  try {
    fs.copyFileSync(sourcePath, path.join(destinationPath, fileName));

    console.log(`File '${fileName}' copied to '${destinationPath}'.`);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log(`The source file '${fileName}' or `
      + `destination directory '${destinationPath}' does not exist.`);
    }

    if (error.code === 'EISDIR') {
      console.log(`You're trying to copy a directory.`);
    }
  }
}

module.exports = { copyFile };
