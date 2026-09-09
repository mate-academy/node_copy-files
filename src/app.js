'use strict';
/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const args = process.argv.slice(2);

function copyFile(source, destination) {
  try {
    if (!fs.existsSync(source)) {
      console.error('Source file does not exist');

      return;
    }
  } catch (err) {
    console.error('Error checking if source file exists:', err.message);

    return;
  }

  if (path.resolve(source) === path.resolve(destination)) {
    return;
  }

  try {
    if (
      fs.statSync(source).isDirectory() ||
      (fs.existsSync(destination) && fs.statSync(destination).isDirectory())
    ) {
      console.error('Source or destination cannot be a directory');

      return;
    }
  } catch (err) {
    console.error(err.message);

    return;
  }

  try {
    fs.copyFileSync(source, destination);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

if (args.some((a) => a.startsWith('--') || a.startsWith('-'))) {
  console.error('Error: flags/options are not supported');
} else if (args.length !== 2 || args.some((a) => typeof a !== 'string')) {
  console.error(
    'Error: exactly two correct positional arguments are required.',
  );
} else {
  copyFile(args[0], args[1]);
}

module.exports = { copyFile };
