'use strict';

const { copyFile } = require('./copyFile.js');
const [fileToCopy, fileToCreate] = process.argv.slice(2);

if (!fileToCopy || !fileToCreate) {
  throw new Error('Function requires two arguments.');
}

copyFile(fileToCopy, fileToCreate);
