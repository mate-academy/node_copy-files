'use strict';
/* eslint-disable no-console */

const fs = require('node:fs');
const path = require('node:path');
const [filePath, copyFilePath] = process.argv.slice(2);

function copyFile(filePath1, filePath2) {
  if (!filePath1 || !filePath2) {
    console.error('Usage: node app.js <source> <destination>');

    return;
  }

  if (path.resolve(filePath1) === path.resolve(filePath2)) {
    return;
  }

  fs.stat(filePath1, (error, stats) => {
    if (error) {
      console.error(error);

      return;
    }

    if (!stats.isFile()) {
      console.error('Source is not a file');

      return;
    }

    fs.copyFile(filePath1, filePath2, (err) => {
      if (err) {
        console.error(err);
      }
    });
  });
}

copyFile(filePath, copyFilePath);
