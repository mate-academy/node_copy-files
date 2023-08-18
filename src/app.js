'use strict';

const fs = require('fs');
const path = require('path');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter the path of the file to copy: ', sourceFilePath => {
  readline.question('Enter the destination directory: ', destinationFolderPath => {
    readline.close();

    copyFile(sourceFilePath, destinationFolderPath);
  });
});

function copyFile(sourceFilePath, destinationFolderPath) {
  const sourceFileName = path.basename(sourceFilePath);
  const destinationPath = path.join(destinationFolderPath, sourceFileName);

  if (!fs.existsSync(sourceFilePath)) {
    console.error('Source file does not exist.');
    return;
  }

  if (!fs.existsSync(destinationFolderPath)) {
    console.error('Destination folder does not exist.');
    return;
  }

  const destinationStats = fs.statSync(destinationFolderPath);
  if (!destinationStats.isDirectory()) {
    console.error('Destination is not a directory.');
    return;
  }

  if (fs.existsSync(destinationPath)) {
    console.error('The file you are trying to copy, already exists in destination folder');
    return;
  }

  fs.copyFile(sourceFilePath, destinationPath, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`File has been successfully copied to the destination: "${destinationPath}"`);
    }
  });
}
