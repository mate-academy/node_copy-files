'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(sourcePath, destinationPath) {
  const sourceAbsolutePath = path.resolve(sourcePath);
  const destinationAbsolutePath = path.resolve(destinationPath);

  if (sourceAbsolutePath === destinationAbsolutePath) {
    // console.log('Source and destination paths are the same. Nothing to do.');

    return;
  }

  try {
    const fileContent = fs.readFileSync(sourceAbsolutePath);

    fs.writeFileSync(destinationAbsolutePath, fileContent);

    return `File copied from ${sourceAbsolutePath} 
    to ${destinationAbsolutePath}`;
  } catch (error) {
    throw Error(`Error occurred while copying the file: ${error.message}`);
  }
}

// example
const sourceFilePath = 'file.txt';
const destinationFilePath = 'file-copy.txt';

copyFile(sourceFilePath, destinationFilePath);
