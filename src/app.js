/* eslint-disable no-console */
'use strict';

const fs = require('fs');

if (process.argv.length !== 4) {
  throw new Error(
    'Please, enter only path of file to copy and path of result file'
  );
}

const pathFrom = process.argv[2];
const pathTo = process.argv[3];

if (pathFrom === pathTo) {
  throw new Error('You cannon use the same paths to copy');
}

try {
  fs.copyFileSync(pathFrom, pathTo);
} catch (e) {
  throw new Error('Unable to copy');
}
