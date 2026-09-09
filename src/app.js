/* eslint-disable no-console */
'use strict';

const { copyFile } = require('fs/promises');

async function copy() {
  const [, , source, destination] = process.argv;

  if (!source || !destination) {
    console.error('Please provide both source and destination paths.');

    return;
  }

  if (source === destination) {
    return;
  }

  try {
    await copyFile(source, destination);
    console.log(`Copied from "${source}" to "${destination}".`);
  } catch (error) {
    console.error('Copy failed:', error.message);
  }
}

copy();
