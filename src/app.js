/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function copyFiles() {
  const args = process.argv.slice(2);

  if (args.length !== 2) {
    throw new Error(
      'Please enter the correct command: node app.js <source> <destination>',
    );
  }

  const [source, dest] = args;

  if (!fs.existsSync(source) || !fs.statSync(source).isFile()) {
    throw new Error('Source file not found.');
  }

  if (path.resolve(source) === path.resolve(dest)) {
    return;
  }

  if (!fs.existsSync(path.dirname(dest))) {
    throw new Error('Destination directory not found.');
  }

  fs.copyFileSync(source, dest);
}

try {
  copyFiles();
} catch (error) {
  console.error(error.message);
}
