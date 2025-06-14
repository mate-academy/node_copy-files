'use strict';

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const [src, dest] = args;

if (!src || !dest) {
  // eslint-disable-next-line no-console
  console.error('source or destination is not defined');
  process.exit(1);
}

const resolvedSrc = path.resolve(src);
const resolvedDest = path.resolve(dest);

if (resolvedSrc === resolvedDest) {
  process.exit(1);
}

fs.stat(resolvedSrc, (err, stats) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error('Error reading source file:', err);
    process.exit(1);
  }

  if (!stats.isFile()) {
    // eslint-disable-next-line no-console
    console.error('Source is not a file');
    process.exit(1);
  }

  fs.copyFile(resolvedSrc, resolvedDest, (er) => {
    if (er) {
      // eslint-disable-next-line no-console
      console.error('Error copying file:', er);
      process.exit(1);
    }
    // eslint-disable-next-line no-console
    console.log('File copied successfully!');
  });
});
