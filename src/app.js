'use strict';

/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

function copyFile() {
  const [, , sourceArg, destinationArg] = process.argv;

  if (!sourceArg || !destinationArg) {
    console.error('Not enough parameters');

    return;
  }

  const source = path.resolve(sourceArg);
  const destination = path.resolve(destinationArg);

  if (source === destination) {
    return;
  }

  if (!fs.existsSync(source)) {
    console.error('Source does not exist');

    return;
  }

  const sourceStat = fs.statSync(source);

  if (!sourceStat.isFile()) {
    console.error('Source is not a file');

    return;
  }

  if (fs.existsSync(destination)) {
    const destinationStat = fs.statSync(destination);

    if (destinationStat.isDirectory()) {
      console.error('Destination is a directory');

      return;
    }
  }

  try {
    fs.copyFileSync(source, destination);
  } catch (error) {
    console.error(error);
  }
}

copyFile();

module.exports = { copyFile };
