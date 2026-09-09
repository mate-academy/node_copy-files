/* eslint-disable no-console */
'use strict';

const { cp } = require('fs/promises');

async function copy() {
  const [, , sourcePath, destinationPath] = process.argv;

  if (!sourcePath || !destinationPath) {
    console.error('You must provide both source and destination paths.');

    return;
  }

  if (sourcePath === destinationPath) {
    console.error('Source and destination paths must be different.');

    return;
  }

  try {
    await cp(sourcePath, destinationPath);
    console.log('File copied successfully.');
  } catch (error) {
    console.error('Failed to copy file:', error.message);
  }
}

copy();
