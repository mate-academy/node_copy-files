/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFile() {
  const source = process.argv[2];
  const destination = process.argv[3];

  if (!source || !destination) {
    console.error('Missing arguments');

    return;
  }

  if (!fs.existsSync(source)) {
    console.error('File does not exist');

    return;
  }

  const sourceStats = fs.statSync(source);

  if (sourceStats.isDirectory()) {
    console.error('Source is a directory');

    return;
  }

  if (fs.existsSync(destination)) {
    const destinationStats = fs.statSync(destination);

    if (destinationStats.isDirectory()) {
      console.error('Destination is a directory');

      return;
    }
  }

  if (source === destination) {
    return;
  }

  fs.copyFile(source, destination, (err) => {
    if (err) {
      console.error('Copy failed:', err.message);

      return;
    }
    console.log(`File copied from ${source} to ${destination}`);
  });
}

copyFile();

module.exports = { copyFile };
