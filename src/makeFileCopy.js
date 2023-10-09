'use strict';

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
    return;
  }

  const fileData = fs.readFileSync(fileToCopyPath, 'utf-8');

  fs.writeFileSync(pathOfCopiedFile, fileData);
};

module.exports = {
  makeFileCopy,
};
