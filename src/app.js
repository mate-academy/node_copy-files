'use strict';
/* eslint-disable no-console */

const fs = require('fs/promises');

const [fileName, copiedFileName] = process.argv.slice(2);

if (fileName === copiedFileName) {
  console.log('Filenames are same!');
} else {
  fs.copyFile(fileName, copiedFileName)
    .then(() => `File: ${fileName} was successfully copied`)
    .catch((error) => console.error(error));
}
