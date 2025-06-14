'use strict';

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const [src, dest] = args;

if (!src || !dest) {
  // eslint-disable-next-line no-console
  console.error('sorce or destination is not defined');
  process.exit();
}

const resolvedSrc = path.resolve(src);
const resolvedDest = path.resolve(dest);

if (resolvedSrc === resolvedDest) {
  process.exit();
}

fs.stat(resolvedSrc, (err, stats) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error('Error reading source file:', err);
    process.exit();
  }

  if (!stats.isFile()) {
    // eslint-disable-next-line no-console
    console.error('Source is not a file');
    process.exit();
  }

  fs.copyFile(resolvedSrc, resolvedDest, (er) => {
    if (er) {
      // eslint-disable-next-line no-console
      console.error('Error copying file:', er);
      process.exit();
    }
    // eslint-disable-next-line no-console
    console.log('File copied successfully!');
  });
});
