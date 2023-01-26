'use strict';

const fs = require('fs');

function copyFiles(fileToCopyPath, fileToInsertPath) {
  if (fileToCopyPath !== fileToInsertPath) {
    fs.readFile(fileToCopyPath, 'utf8', (err, data) => {
      if (err) {
        throw new Error('Enter correct path to first file!');
      }

      fs.writeFile(fileToInsertPath, data, (error) => {
        if (error) {
          throw new Error('Enter correct path to second file!');
        }
      });
    });
  }
}

module.exports = { copyFiles };
