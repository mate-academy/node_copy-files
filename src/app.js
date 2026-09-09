'use strict';
/* eslint-disable no-console */

const fs = require('fs');

function copyFile() {
  const params = process.argv.slice(2);
  const sourcePath = params[0];
  const destinationPath = params[1];

  if (params.length !== 2) {
    return console.error(
      'Please provide a source file and a destination file.',
    );
  }

  if (sourcePath === destinationPath) {
    return console.error('Source and destination files are the same.');
  }

  fs.copyFile(sourcePath, destinationPath, (err) => {
    if (err) {
      console.error('Error during file copy:', err.message);
    }
  });
}

copyFile();

module.exports = { copyFile };
