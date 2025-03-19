/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(source, destination) {
  if (path.resolve(source) === path.resolve(destination)) {
    // throw new Error('Source and destination are the same. No action taken.');
    console.error('Source and destination are the same. No action taken.');

    return;
  }

  if (fs.existsSync(source) && fs.lstatSync(source).isDirectory()) {
    // throw new Error('Source is a directory. Only files are supported.');
    console.error('Source is a directory. Only files are supported.');

    return;
  }

  if (fs.existsSync(destination) && fs.lstatSync(destination).isDirectory()) {
    // throw new Error('Destination is a directory. Only files are supported.');
    console.error('Destination is a directory. Only files are supported.');

    return;
  }

  if (!fs.existsSync(source)) {
    // throw new Error(`Source file does not exist: ${source}`);
    console.error(`Source file does not exist: ${source}`);

    return;
  }

  fs.copyFileSync(source, destination);
  console.log(`File copied from ${source} to ${destination}`);
}

function main() {
  const args = process.argv.slice(2);

  if (args.length !== 2) {
    // throw new Error('Should provide two arguments.');
    console.error('Should provide two arguments.');

    return;
  }

  const [source, destination] = args;

  copyFile(source, destination);
}

main();
