'use strict';

/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const paths = process.argv.slice(2);
const [filePathOrig, filePathDest] = paths;

if (paths.length !== 2) {
  console.error('Not valid argument(s) is provided');
} else {
  copyFile(filePathOrig, filePathDest);
}

function copyFile(source, dest) {
  const pathOrig = path.resolve(source);
  const pathDest = path.resolve(dest);

  if (pathOrig === pathDest) {
    console.error('File in this directory already exist');

    return;
  }

  if (!fs.existsSync(pathOrig)) {
    console.error('This file does not exist', pathOrig);

    return;
  }

  fs.copyFile(pathOrig, pathDest, (err) => {
    if (err) {
      console.error(`err`);

      return;
    }
    console.log('File copied successfully.');
  });
}
