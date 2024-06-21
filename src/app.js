/* eslint-disable no-console */
'strict use';

const fs = require('fs');
const path = require('path');

function copyFile(src, dest) {
  try {
    if (path.resolve(src) === path.resolve(dest)) {
      console.error(
        'Source and destination paths are the same. No action taken.',
      );

      return;
    }

    if (!fs.existsSync(src)) {
      throw new Error('Source file does not exist.');
    }

    if (!fs.lstatSync(src).isFile()) {
      throw new Error('Source is not a file.');
    }

    fs.copyFileSync(src, dest);
    console.log(`File copied from ${src} to ${dest}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error('Usage: node app.js <source> <destination>');
} else {
  const [src, dest] = args;

  copyFile(src, dest);
}
