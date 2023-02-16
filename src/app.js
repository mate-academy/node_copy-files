/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFile(originalFile, newFile) {
  if (originalFile === newFile) {
    console.log('Source and target files are the same!');

    return;
  }

  fs.readFile(originalFile, (err, data) => {
    if (err) {
      throw err;
    }

    fs.writeFile(newFile, data, () => {
      if (err) {
        throw err;
      }

      console.log(`${originalFile} was copied to ${newFile}.`);
    });
  });
}

copyFile('src/file.txt', 'src/copy.txt');
