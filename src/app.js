/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const [source, destination] = process.argv.slice(2);

function copyFile(src, dest) {
  if (!src || !dest) {
    console.error('Source and destination files must be provided.');

    return;
  }

  const srcPath = path.resolve(src);
  const destPath = path.resolve(dest);

  if (srcPath === destPath) {
    return;
  }

  if (!fs.existsSync(srcPath)) {
    console.error(`Source file does not exist: ${srcPath}`);

    return;
  }

  if (fs.lstatSync(srcPath).isDirectory()) {
    console.error('Source is a directory, cannot copy directories.');

    return;
  }

  if (fs.existsSync(destPath) && fs.lstatSync(destPath).isDirectory()) {
    console.error('Destination is a directory, cannot copy to a directory.');

    return;
  }

  try {
    fs.copyFileSync(srcPath, destPath);
  } catch (err) {
    console.error(`Failed to copy file: ${err.message}`);
  }
}

try {
  copyFile(source, destination);
} catch (err) {
  console.error(err.message);
}
