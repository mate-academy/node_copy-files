'use strict';

const fs = require('fs');

const source = process.argv[2];
const destination = process.argv[3];

if (source === destination) {
  process.exit(0);
}

try {
  fs.copyFileSync(source, destination);
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(error);
}
