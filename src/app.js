/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [flag, sourseFilePath, destFilePath] = process.argv.slice(2, 5);
const fullSoursePath = `${__dirname}\\${sourseFilePath}`;
const fullDestPath = `${__dirname}\\${destFilePath}`;

if (flag === 'cp') {
  fs.readFile(fullSoursePath, (readingError, fileData) => {
    if (readingError) {
      console.log(`Cannot find file at ${sourseFilePath}`);
    } else if (sourseFilePath !== destFilePath) {
      fs.writeFile(fullDestPath, fileData, (writingError) => {
        if (writingError) {
          console.log(writingError);
        }
        console.log('File successfully copied');
      });
    } else {
      console.log('Use another name for a file copy');
    }
  });
} else {
  console.log('Wrong command. Use cp to copy file');
}
