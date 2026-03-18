/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');
const path = require('path');

const args = process.argv.slice(2);
const [source, destination] = args;

async function copy() {
  if (!source || !destination) {
    console.error('Please specify the source and destination file paths');

    return;
  }

  const sourcePath = path.resolve(source);
  const destinationPath = path.resolve(destination);

  if (sourcePath === destinationPath) {
    return;
  }

  try {
    await fs.copyFile(sourcePath, destinationPath);
  } catch (error) {
    console.error(error);
  }
}

copy();
