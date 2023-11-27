/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

// eslint-disable-next-line no-shadow
function copyFile(sourcePath, destinationPath) {
  // Resolve the absolute paths
  const sourceAbsolutePath = path.resolve(sourcePath);
  const destinationAbsolutePath = path.resolve(destinationPath);

  // Check if source and destination are the same
  if (sourceAbsolutePath === destinationAbsolutePath) {
    console.log('Source and destination are the same. No action taken.');

    return;
  }

  // Read the content from the source file
  const fileContent = fs.readFileSync(sourceAbsolutePath);

  // Write the content to the destination file
  fs.writeFileSync(destinationAbsolutePath, fileContent);

  console
    .log(
      `File '${sourceAbsolutePath}' copied to`
      + ` '${destinationAbsolutePath}' successfully.`
    );
}

// Check if the correct number of arguments is provided
if (process.argv.length !== 4) {
  console.error('Usage: node copyFile.js <sourcePath> <destinationPath>');
  process.exit(1);
}

// Get the source and destination paths from command line arguments
const [, , sourcePath, destinationPath] = process.argv;

// Call the copyFile function with provided paths
copyFile(sourcePath, destinationPath);
