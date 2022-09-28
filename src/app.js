'use strict';
/* eslint-disable no-console */

const fs = require('fs/promises');

const [command, inputFile, outputFile] = process.argv.slice(2, 5);

if (command !== 'cp') {
  console.log('\x1b[31m', `Invalid command - ${command}, try to use <cp>`);
} else if (inputFile !== outputFile) {
  fs.copyFile(inputFile, outputFile)
    .then(() => {
      console.log('\x1b[32m', 'File copied successfully');
    })
    .catch((err) => {
      console.log('\x1b[31m', `failed to copy file, ${err}`);
    });
}
