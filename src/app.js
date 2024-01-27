/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const [,, sourceFile, destinationFile] = process.argv;

switch (true) {
  case (process.argv.length !== 4):
    console.error('You specified incorrect data');
    break;

  case (sourceFile === destinationFile):
    break;

  case !fs.existsSync(sourceFile):
    console.error('The source is not exist');
    break;

  default: {
    try {
      fs.cpSync(sourceFile, destinationFile);
    } catch (err) {
      console.error('Error copying file: ', err);
    }
  }
}
