'use strict';

const fs = require('fs');

const source = process.argv[2];
const destination = process.argv[3];

if (source !== destination) {
  try {
    if (!source || !destination) {
      throw new Error('Please provide both source and destination paths.');
    }

    const stat = fs.statSync(source);

    if (!stat.isFile()) {
      throw new Error(`The path "${source}" is not a file.`);
    }

    fs.copyFileSync(source, destination);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error.message);
  }
}
