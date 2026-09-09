'use strict';

const fs = require('fs');

function copyFile(sourcePath, newFilePath) {
  fs.readFile(sourcePath, 'utf-8', (readError, data) => {
    if (readError) {
      console.log(readError.message);

      return;
    }

    fs.writeFile(newFilePath, data, (copyError) => {
      if (copyError) {
        console.log(copyError.message);

        return;
      }

      console.log(`File ${sourcePath} was copied to ${newFilePath}`);
    });
  });
}

module.exports = { copyFile };
