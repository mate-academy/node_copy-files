/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const [src, dest] = process.argv.slice(2);

if (!src || !dest) {
  console.error('Usage: node app.js <source> <destination>');
} else {
  const srcPath = path.resolve(src);
  const destPath = path.resolve(dest);

  if (srcPath !== destPath) {
    try {
      if (!fs.existsSync(srcPath)) {
        console.error('Source file does not exist');
      } else if (fs.lstatSync(srcPath).isDirectory()) {
        console.error('Source is a directory');
      } else if (
        fs.existsSync(destPath) &&
        fs.lstatSync(destPath).isDirectory()
      ) {
        console.error('Destination is a directory');
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    } catch (err) {
      console.error(err.message);
    }
  }
}
