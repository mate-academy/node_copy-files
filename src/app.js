'use strict';

const path = require('path');
const { copyFile } = require('./copyFile');

if (!process.argv.slice(2).length) {
  console.log('Enter source location and new file location');
} else {
  const sourcePath = path.resolve(process.argv[2]);
  const newFilePath = path.resolve(process.argv[3]);

  if (sourcePath === newFilePath) {
    console.log('Enter new file location');
  } else {
    copyFile(sourcePath, newFilePath);
  }
}
