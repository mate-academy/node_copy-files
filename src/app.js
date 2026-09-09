'use strict';

const fs = require('fs');
const path = require('path');

const [file, dest] = process.argv.slice(2);

if (process.argv.slice(2).length !== 2) {
  /* eslint-disable-next-line no-console */
  console.error('Provide source and destination');
  process.exit(0);
}

function main() {
  if (path.resolve(file) !== path.resolve(dest)) {
    try {
      const stats = fs.statSync(file);

      if (!stats.isFile()) {
        /* eslint-disable-next-line no-console */
        console.error('Source is not a file');

        process.exit(0);
      }
    } catch (error) {
      /* eslint-disable-next-line no-console */
      console.error(error);

      process.exit(0);
    }

    let target;

    try {
      const dets = fs.statSync(dest);

      if (dets.isDirectory()) {
        /* eslint-disable-next-line no-console */
        console.error('Destination is a directory');
        process.exit(0);
      } else {
        target = dest;
      }
    } catch (error) {
      if (error.code === 'ENOENT') {
        target = dest;
      } else {
        /* eslint-disable-next-line no-console */
        console.error(error);
        process.exit(0);
      }
    }

    try {
      fs.cpSync(file, target);
    } catch (error) {
      /* eslint-disable-next-line no-console */
      console.error(error);

      process.exit(0);
    }
  }
}

main();
