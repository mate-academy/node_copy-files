'use strict';
/* eslint-disable no-console */

const fs = require('fs/promises');

const [, , source, destination] = process.argv;

fs.lstat(destination)
  .then((stats) => stats.isDirectory())
  .catch(() => false)
  .then((isDirectory) => {
    if (!source || !destination || isDirectory) {
      console.error();

      return;
    }

    if (source !== destination) {
      fs.readFile(source, 'utf-8')
        .then((data) => fs.writeFile(destination, data, 'utf-8'))
        .catch(() => {
          console.error();
        });
    }
  });
