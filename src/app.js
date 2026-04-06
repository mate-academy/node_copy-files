/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const [src, dest] = process.argv.slice(2);

if (!src || !dest) {
  console.error('Usage: node app.js <source> <destination>');
  process.exit(1);
}

const srcPath = path.resolve(src);
const destPath = path.resolve(dest);

if (srcPath !== destPath) {
  try {
    fs.copyFileSync(src, dest);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
