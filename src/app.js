'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(sourcePath, destinationPath) {
  const src = path.resolve(sourcePath);
  const dest = path.resolve(destinationPath);

  if (src === dest) {
    return;
  }

  if (!fs.existsSync(src)) {
    // eslint-disable-next-line no-console
    console.error('Error: source file does not exist');

    return;
  }

  if (!fs.statSync(src).isFile()) {
    // eslint-disable-next-line no-console
    console.error('Error: source is not a file');

    return;
  }

  try {
    fs.copyFileSync(src, dest);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error copying file:', err.message);
  }
}

const args = process.argv.slice(2);

if (args.length !== 2) {
  // eslint-disable-next-line no-console
  console.error('Node error');
} else {
  copyFile(args[0], args[1]);
}
