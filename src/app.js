/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function makeFileCopy(filePath, copyPath) {
  const sourcePath = path.resolve(filePath);
  const destinationPath = path.resolve(copyPath);

  if (sourcePath === destinationPath) {
    return console.error("You can't copy file into the same location");
  }

  fs.cp(filePath, copyPath, (error) => {
    if (error) {
      return console.error(error);
    } else {
      console.log('File copied successfully');
    }
  });
}

const [sourceFilePath, destinationFilePath] = process.argv.slice(2);

if (!sourceFilePath || !destinationFilePath) {
  console.error('There must be 2 path arguments');
} else {
  makeFileCopy(sourceFilePath, destinationFilePath);
}
