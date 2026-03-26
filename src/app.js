'use strict';

/* eslint-disable no-console */

const fs = require('fs');

function copyFile() {
  const arg = process.argv.slice(2);

  const source = arg[0];
  const destination = arg[1];

  if (!source || !destination) {
    console.error('Invalid arguments');

    return;
  }

  if (source === destination) {
    return;
  }

  if (!fs.existsSync(source)) {
    console.error('Source does not exist');

    return;
  }

  if (!fs.statSync(source).isFile()) {
    console.error('Source is not a file');

    return;
  }

  if (fs.existsSync(destination) && fs.statSync(destination).isDirectory()) {
    console.error('Destination is a directory');

    return;
  }

  try {
    fs.copyFileSync(source, destination);
  } catch (error) {
    console.error(error.message);
  }
}

copyFile();
