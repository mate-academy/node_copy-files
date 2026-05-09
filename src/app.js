/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFiles() {
  const fileLocation = process.argv[2];
  const destinationLocation = process.argv[3];

  if (process.argv.length < 4) {
    console.error(
      'Usage: node app.js <source_file_path> <destination_file_path>',
    );

    return;
  }

  if (!fileLocation || !destinationLocation) {
    console.error('Please provide both the source and destination file paths.');

    return;
  }

  if (fileLocation === destinationLocation) {
    console.error('Source and destination paths cannot be the same.');

    return;
  }

  if (!fs.existsSync(fileLocation)) {
    console.error('Source file does not exist.');

    return;
  }

  if (fs.lstatSync(fileLocation).isDirectory()) {
    console.error('Source path is a directory. Please provide a file path.');

    return;
  }

  if (
    fs.existsSync(destinationLocation) &&
    fs.lstatSync(destinationLocation).isDirectory()
  ) {
    console.error(`Destination path is a directory.
      Please provide a file path.`);

    return;
  }

  try {
    fs.copyFileSync(fileLocation, destinationLocation);
    console.log(`File copied from ${fileLocation} to ${destinationLocation}`);
  } catch (err) {
    console.error('Error copying file:', err);
  }
}

copyFiles();

module.exports = copyFiles;
