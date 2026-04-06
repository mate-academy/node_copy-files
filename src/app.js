'use strict';

const fs = require('fs');
const path = require('path');

const [src, dest] = process.argv.slice(2);

const srcPath = path.resolve(src);
const destPath = path.resolve(dest);

if (srcPath !== destPath) {
  try {
    fs.copyFileSync(src, dest);
  } catch (err) {
    console.error(err);
  }
}
