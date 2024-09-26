/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(sourcePath, destinationPath) {
  const sourceAbsolutePath = path.resolve(sourcePath);
  const destinationAbsolutePath = path.resolve(destinationPath);

  if (sourceAbsolutePath === destinationAbsolutePath) {
    console.log('Source and destination are the same.');

    return;
  }

  try {
    fs.copyFileSync(sourceAbsolutePath, destinationAbsolutePath);

    console.log(
      `File "${sourceAbsolutePath}" copied to "${destinationAbsolutePath}"`
    );
  } catch (error) {
    console.error(`Error copying file: ${error.message}`);
  }
}

const sourceFile = process.argv[2];
const destinationFile = process.argv[3];

copyFile(sourceFile, destinationFile);
