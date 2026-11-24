'use strict';

const fs = require('fs');
const path = require('path');

function copyFile() {
  const args = process.argv.slice(2);

  if (args.length !== 2 || args.some((arg) => arg.startsWith('-'))) {
    throw new Error('Usage: node src/app.js <source> <destination>');
  }

  const [source, destination] = args;

  if (path.resolve(source) === path.resolve(destination)) {
    return;
  }

  const sourceStats = fs.statSync(source);

  if (!sourceStats.isFile()) {
    throw new Error('Source must be a file.');
  }

  let destinationStats;

  try {
    destinationStats = fs.statSync(destination);
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
  }

  if (destinationStats) {
    if (!destinationStats.isFile()) {
      throw new Error('Destination must be a file.');
    }

    if (
      sourceStats.dev === destinationStats.dev &&
      sourceStats.ino === destinationStats.ino
    ) {
      return;
    }
  }

  fs.copyFileSync(source, destination);
}

try {
  copyFile();
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(error.message);
}
