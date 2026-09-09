/* eslint-disable no-console */
'use strict';

const { cp } = require('fs/promises');

async function copy() {
  const [, , source, destination] = process.argv;

  if (!source || !destination) {
    console.error('Please provide both source and destination paths.');

    return;
  }

  if (source === destination) {
    console.log('Source and destination paths are the same');

    return;
  }

  try {
    await cp(source, destination);
    console.log(`Copied from "${source}" to "${destination}".`);
  } catch (error) {
    console.error('Copy failed:', error.message);
  }
}

copy();
