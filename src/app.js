/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(sourcePath, destinationPath) {
  if (!sourcePath || !destinationPath) {
    console.error('Only one argument is provided');

    return;
  }

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

const args = process.argv.slice(2);

copyFile(...args);
