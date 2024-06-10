'use strict';
/* eslint-disable no-console */

const fs = require('fs/promises');

function copyFile(source, destination) {
  return fs
    .lstat(destination)
    .then((stats) => stats.isDirectory())
    .catch(() => false)
    .then((isDirectory) => {
      if (!source || !destination || isDirectory) {
        throw new Error('Invalid source or destination path.');
      }

      if (source !== destination) {
        return fs
          .readFile(source, 'utf-8')
          .then((data) => fs.writeFile(destination, data, 'utf-8'))
          .catch(() => {
            throw new Error('Failed to copy the file.');
          });
      } else {
        throw new Error('Source and destination paths cannot be the same.');
      }
    });
}

const [, , s, d] = process.argv;

copyFile(s, d)
  .then(() => console.log('File copied successfully.'))
  .catch((error) => console.error(error.message));
