'use strict';
/* eslint-disable no-console */

const path = require('path');
const fs = require('fs');

function copyFile() {
  const args = process.argv.slice(2);

  if (args.length !== 2) {
    console.error('Expected 2 arguments');

    return;
  }

  const [source, destination] = args;
  const normalizedSource = path.resolve(source);
  const normalizedDestination = path.resolve(destination);

  if (normalizedSource === normalizedDestination) {
    return;
  }

  try {
    fs.copyFileSync(source, destination);
  } catch (error) {
    console.error(error.message);
  }
}

copyFile();
