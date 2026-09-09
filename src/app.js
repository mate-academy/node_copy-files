/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function copyFiles(copyFrom, copyTo) {
  if (copyTo === copyFrom) {
    console.log('You can not copy file to the same location');

    return;
  }

  const copyFromPath = path.join(__dirname, copyFrom);
  const copyToPath = path.join(__dirname, copyTo);

  fs.copyFile(copyFromPath, copyToPath, (err) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.log(`Error: Source file '${copyFrom}' does not exist.`);
      } else {
        console.log('Error Found:', err);
      }

      return;
    }

    console.log(`File "${copyFrom}" successfully copied to "${copyTo}"`);
  });
}

const [file1, file2] = process.argv.slice(2);

copyFiles(file1, file2);
