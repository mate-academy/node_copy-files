/* eslint-disable no-console */
'use strict';

const [source, dest] = process.argv.slice(2);
const fs = require('fs');
const path = require('path');

if (!source || !dest) {
  console.error('Missing source or destination file path.');
  process.exit(0);
}

const sourcePath = path.resolve(source);
const destPath = path.resolve(dest);

if (sourcePath === destPath) {
  process.exit(0);
}

if (!fs.existsSync(sourcePath)) {
  console.error(`Source file does not exist: ${sourcePath}`);
  process.exit(0);
}

if (fs.statSync(sourcePath).isDirectory()) {
  console.error(`Source file is a directory: ${sourcePath}`);
  process.exit(0);
}

if (fs.existsSync(destPath) && fs.statSync(destPath).isDirectory()) {
  console.error(`Destination file is a directory: ${destPath}`);
  process.exit(0);
}

fs.copyFile(sourcePath, destPath, (err) => {
  if (err) {
    console.error(`Error copying file from ${sourcePath} to ${destPath}:`, err);
    process.exit(0);
  }
  console.log(`File copied from ${sourcePath} to ${destPath} successfully.`);
});
