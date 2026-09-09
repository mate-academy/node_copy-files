/* eslint-disable no-console */
/* eslint-disable max-len */
'use strict';

const fs = require('fs');
const path = require('path');

const copyFile = (source, destination) => {
  if (path.resolve(source) === path.resolve(destination)) {
    console.error(
      'Error: Source and destination cannot be the same. Copy operation canceled.',
    );

    return;
  }

  fs.copyFile(source, destination, (err) => {
    if (err) {
      console.error(`Error during file copy: ${err}`);

      return;
    }

    console.log(`File successfully copied from ${source} to ${destination}`);
  });
};

const [sourceFile, destinationFile] = process.argv.slice(2);

if (!sourceFile || !destinationFile) {
  console.error(
    'Error: Source and destination must be specified for file copy.',
  );
} else {
  copyFile(sourceFile, destinationFile);
}
