'use strict';
/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');

function copyFile(source, destination) {
  const sourceFilename = path.basename(source);
  const destinationFilename = path.basename(destination);

  if (path.resolve(source) === path.resolve(destination)) {
    console.log('Source and destination are the same. No action needed.');

    return;
  }

  try {
    fs.copyFileSync(source, destination);

    console.log(`
      Copied ${sourceFilename} to ${destinationFilename} successfully.
    `);
  } catch (err) {
    throw new Error(err);
  }
}

const [sourcePath, destinationPath] = process.argv.slice(2);

copyFile(sourcePath, destinationPath);
