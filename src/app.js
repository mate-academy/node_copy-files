/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(source, destination) {
  if (path.resolve(source) === path.resolve(destination)) {
    console.error('Source and destination paths are the same.');

    return;
  }

  if (!fs.existsSync(source)) {
    console.error(`Source file "${source}" does not exist.`);

    return;
  }

  fs.copyFileSync(source, destination);
  console.log(`File copied from "${source}" to "${destination}"`);
}

const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error('Usage: node app.js <source> <destination>');
  process.exit(1);
}

const [src, dest] = args;

copyFile(src, dest);
