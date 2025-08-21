/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const [source, destination] = process.argv.slice(2);

function copyFile(src, dest) {
  try {
    if (!src || !dest) {
      console.error('Source and destination files must be provided.');
      process.exit(1);
    }

    const srcPath = path.resolve(src);
    const destPath = path.resolve(dest);

    if (srcPath === destPath) {
      return;
    }

    if (!fs.existsSync(srcPath)) {
      console.error(`Source file does not exist: ${srcPath}`);
      process.exit(1);
    }

    if (fs.lstatSync(srcPath).isDirectory()) {
      console.error('Source is a directory, cannot copy directories.');
      process.exit(1);
    }

    if (fs.existsSync(destPath) && fs.lstatSync(destPath).isDirectory()) {
      console.error('Destination is a directory, cannot copy to a directory.');
      process.exit(1);
    }

    fs.copyFileSync(srcPath, destPath);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

copyFile(source, destination);
