/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(src, dest) {
  const srcPath = path.resolve(src);
  const destPath = path.resolve(dest);

  if (srcPath === destPath) {
    return;
  }

  if (!fs.existsSync(srcPath)) {
    const msg = `Source file does not exist: ${srcPath}`;

    console.error(msg);
    throw new Error(msg);
  }

  if (fs.lstatSync(srcPath).isDirectory()) {
    const msg = 'Source is a directory, cannot copy directories.';

    console.error(msg);
    throw new Error(msg);
  }

  if (fs.existsSync(destPath) && fs.lstatSync(destPath).isDirectory()) {
    const msg = 'Destination is a directory, cannot copy to a directory.';

    console.error(msg);
    throw new Error(msg);
  }

  fs.copyFileSync(srcPath, destPath);
}

function main() {
  const args = process.argv.slice(2);

  if (args.length !== 2) {
    const msg = 'Exactly two arguments required: source and destination.';

    console.error(msg);
    throw new Error(msg);
  }

  const [source, destination] = args;

  copyFile(source, destination);
}

try {
  main();
} catch (err) {
  process.exitCode = 1;
}
