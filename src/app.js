/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(from, to) {
  const sourcePath = path.resolve(from);
  const destinationPath = path.resolve(to);

  if (sourcePath === destinationPath) {
    console.log('Source and destination paths are the same. File not copied.');

    return;
  }

  if (!fs.existsSync(sourcePath)) {
    console.log('Source file does not exist.');

    return;
  }

  fs.copyFileSync(sourcePath, destinationPath);
  console.log('File copied successfully!');
}

const [source, destination] = process.argv.slice(2);

copyFile(source, destination);
