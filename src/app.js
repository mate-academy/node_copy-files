'use strict';

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

if (args.length < 2) {
  console.error('Error: Please provide both source and destination file paths');
  return;
}

const [sourceFile, destinationFile] = args;

function copyFile(source, destination) {
  if (source === destination) {
    console.error('Error: Source and destination files are the same');
    return;
  }

  fs.stat(source, (err, stats) => {
    if (err) {
      console.error(`Error: Unable to access source file "${source}"`);
      return;
    }

    if (!stats.isFile()) {
      console.error(`Error: "${source}" is not a file`);
      return;
    }

    fs.copyFile(source, destination, (err) => {
      if (err) {
        console.error(`Error: Failed to copy file - ${err.message}`);
      } else {
        console.log(
          `File copied successfully from "${source}" to "${destination}"`,
        );
      }
    });
  });
}

const sourcePath = path.resolve(sourceFile);
const destinationPath = path.resolve(destinationFile);

copyFile(sourcePath, destinationPath);
