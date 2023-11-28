/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');
const magicNumber = process.argv.length !== 4;

function copyFile(sourcePathOfFile, destinationPathOfFile) {
  const sourceAbsolutePath = path.resolve(sourcePathOfFile);
  const destinationAbsolutePath = path.resolve(destinationPathOfFile);

  if (sourceAbsolutePath === destinationAbsolutePath) {
    console.log('Source and destination are the same. No action taken.');

    return;
  }

  const fileContent = fs.readFileSync(sourceAbsolutePath);

  fs.writeFileSync(destinationAbsolutePath, fileContent);

  console
    .log(
      `File '${sourceAbsolutePath}' copied to`
      + ` '${destinationAbsolutePath}' successfully.`
    );
}

if (magicNumber) {
  console.error('Usage: node copyFile.js <sourcePath> <destinationPath>');
  process.exit(1);
}

const [, , sourcePath, destinationPath] = process.argv;

copyFile(sourcePath, destinationPath);
