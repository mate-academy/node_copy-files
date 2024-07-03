/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const [sourceFilePath, destinationFilePath] = process.argv.slice(2);

const copyFile = (source, dest) => {
  if (path.resolve(source) === path.resolve(dest)) {
    return console.error('Source and destination can`t be the same');
  }

  fs.cp(source, dest, (error) => {
    if (error) {
      return console.error(error);
    } else {
      console.log('File copied successfully');
    }
  });
};

if (!sourceFilePath || !destinationFilePath) {
  console.error('You must enter source and destination.');
} else {
  copyFile(sourceFilePath, destinationFilePath);
}
