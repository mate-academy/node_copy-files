'use strict';

const fs = require('fs');

function copyFile(src, dest) {
  if (src === dest) {
    // eslint-disable-next-line no-console
    console.log('Source and destination are the same. Nothing to do.');

    return;
  }

  fs.copyFile(src, dest, (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
    // eslint-disable-next-line no-console
    console.log(`${src} was successfully copied to ${dest}`);
  });
}

const source = process.argv[2];
const destination = process.argv[3];

copyFile(source, destination);
