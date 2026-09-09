/* eslint-disable no-console */

'use strict';

const fs = require('fs');

const path = require('path');

function copyFile(file, location) {
  const pathToFile = path.resolve(file);

  const pathToLocation = path.resolve(location);

  if (pathToFile === pathToLocation) {
    return;
  }

  if (!fs.existsSync(file)) {
    console.error("This file doesn't exist.");

    return;
  }

  if (fs.existsSync(location) && fs.lstatSync(location).isDirectory()) {
    console.error('Destination is a directory');

    return;
  }

  fs.copyFileSync(file, location);
}

function main() {
  try {
    const params = process.argv.slice(2);

    if (params.length !== 2) {
      console.error('Two arguments are required');

      return;
    }

    const source = params[0];
    const destination = params[1];

    copyFile(source, destination);
  } catch (err) {
    console.error(err);
  }
}

main();
