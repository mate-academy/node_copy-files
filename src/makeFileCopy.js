'use strict';
/* eslint-disable */

const fs = require('fs');
const path = require('path');

function getDirectoryPath(filePath) {
  const splitedPath = filePath.split('/');

  const directoryPath = splitedPath.slice(0, splitedPath.length - 1);

  return directoryPath.join('/');
}

function makeFileCopy(fileToCopy, newFilePath) {
  const fileToCopyPath = path.join(__dirname, fileToCopy);
  const pathOfCopiedFile = path.join(__dirname, newFilePath);

  if (getDirectoryPath(fileToCopyPath) === getDirectoryPath(pathOfCopiedFile)) {
    console.warn('You cannot copy the file to the same directory');

    return;
  }

  const fileData = fs.readFileSync(fileToCopyPath);

  fs.writeFileSync(pathOfCopiedFile, fileData);

  console.log(`Your file has been copied successfully to ${pathOfCopiedFile}`);
};

module.exports = {
  makeFileCopy,
};
