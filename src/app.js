'use strict';

const fs = require('fs');

function app() {
  const args = process.argv.slice(2);
  const [sourcePath, destPath] = args;

  if (args.length !== 2) {
    if (!sourcePath) {
      throw new Error('Source path is missing');
    }

    if (!destPath) {
      throw new Error('Destination path is missing');
    }
  }

  if (sourcePath === destPath) {
    return;
  }

  if (!fs.existsSync(sourcePath)) {
    throw new Error('Source file does not exist');
  }

  try {
    fs.copyFileSync(sourcePath, destPath);

    return `File copied from ${sourcePath} to ${destPath}`;
  } catch (err) {
    throw new Error('Error while copying file');
  }
}

app();
