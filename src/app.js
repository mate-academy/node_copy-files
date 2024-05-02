/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(source, destination) {
  if (path.resolve(source) === path.resolve(destination)) {
    console.error('Error: Source and destination cannot be the same.');

    return;
  }

  fs.copyFile(source, destination, (err) => {
    if (err) {
      console.error('Error copying file:', err);

      return;
    }
    console.log(`File copied from ${source} to ${destination}`);
  });
}

function main() {
  const args = process.argv.slice(2);

  if (args.length !== 2) {
    console.error('Usage: node app.js <source> <destination>');

    return;
  }

  const [source, destination] = args;

  copyFile(source, destination);
}

main();
