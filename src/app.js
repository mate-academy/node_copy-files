/* eslint-disable no-console */
'use strict';

const { copyFileSync } = require('node:fs');

if (process.argv.length !== 4) {
  console.error('Script accepts 2 arguments');
  process.exit(0);
}

const [, , sourceFile, destinationFile] = process.argv;

if (sourceFile === destinationFile) {
  console.error('Can`t copy to the same location');
  process.exit(0);
}

try {
  copyFileSync(sourceFile, destinationFile);
  console.log('File copied successfully!');
} catch (error) {
  console.error('Error copying file:', error);
}
