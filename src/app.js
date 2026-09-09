/* eslint-disable no-shadow */
/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const copyFile = (source, destination) => {
  if (!source || !destination) {
    throw new Error('Source and destination must be provided');
  }

  if (source === destination) {
    throw new Error('Source and destination paths are the same');
  }

  if (!fs.existsSync(source)) {
    throw new Error(`${source} doesn't exist`);
  }

  const sourceStats = fs.statSync(source);

  if (sourceStats.isDirectory()) {
    throw new Error('Source is a directory, not a file');
  }

  if (fs.existsSync(destination)) {
    const destStats = fs.statSync(destination);

    if (destStats.isDirectory()) {
      throw new Error('Destination is a directory, not a file');
    }
  }

  fs.copyFileSync(source, destination);
  console.log(`File copied from "${source}" to "${destination}".`);
};

const [source, destination] = process.argv.slice(2);

try {
  copyFile(source, destination);
} catch (error) {
  console.error(error.message);
}
