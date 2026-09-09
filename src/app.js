'use strict';

/* eslint-disable no-console */

const { copyFile } = require('./copyFile');

const [sourcePath, destinationPath] = process.argv.slice(2);

if (sourcePath !== destinationPath) {
  copyFile(sourcePath, destinationPath);
} else {
  console.log(`You're trying to copy to the same location.`);
}
