'use strict';
/* eslint-disable no-console */

const fs = require('node:fs');
const path = require('node:path');
const [filePath, copyFilePath] = process.argv.slice(2);

function copyFile(filePath1, filePath2) {
  if (!filePath1 || !filePath2) {
    console.error('Usage: node app.js <source> <destination>');

    process.exit(1);
  }

  if (path.resolve(filePath1) === path.resolve(filePath2)) {
    return;
  }

  fs.stat(filePath1, (error, stats) => {
    if (error) {
      console.error(error);

      process.exit(1);
    }

    if (!stats.isFile()) {
      console.error('Source is not a file');

      process.exit(1);
    } else {
      fs.copyFile(filePath1, filePath2, (err) => {
        if (err) {
          console.error(err);

          process.exit(1);
        }
      });
    }
  });
}

copyFile(filePath, copyFilePath);
