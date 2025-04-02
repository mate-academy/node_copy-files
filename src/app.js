'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(src, dst) {
  if (src === undefined || dst === undefined) {
    console.error('error if only one argument is provided');

    return;
  }

  if (!fs.existsSync(src)) {
    console.error('error for non-existent source file');

    return;
  }

  if (fs.lstatSync(src).isDirectory()) {
    console.error('error if source is a directory');

    return;
  }

  if (fs.existsSync(dst)) {
    if (fs.lstatSync(dst).isDirectory()) {
      console.error('error if destination is a directory');

      return;
    }
  }

  if (src !== dst) {
    fs.copyFileSync(src, dst);
  }
}

function main() {
  if (process.argv.length !== 4) {
    console.error('Requires two arguments');

    return;
  }

  copyFile(process.argv[2], process.argv[3]);
}

main();

module.exports = { main, copyFile };
