'use strict';

const fs = require('fs');
const path = require('path');

function copyFile() {
  const [, , source, destination] = process.argv;

  if (!source || !destination) {
    throw new Error('Please provide source and destination paths');
  }

  const sourcePath = path.resolve(source);
  const destPath = path.resolve(destination);

  if (sourcePath === destPath) {
    return;
  }

  const sourceStats = fs.statSync(sourcePath);

  if (sourceStats.isDirectory()) {
    throw new Error('Source is a directory');
  }

  if (fs.existsSync(destPath) && fs.statSync(destPath).isDirectory()) {
    throw new Error('Destination is a directory');
  }

  fs.copyFileSync(sourcePath, destPath);
}

try {
  copyFile();
} catch (error) {
  process.stderr.write(`Error: ${error.message}\n`);
}
