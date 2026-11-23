'use strict';

const fs = require('fs');
const path = require('path');

const [patchToCopy, patchToPaste] = process.argv.slice(2);

try {
  if (!patchToCopy || !patchToPaste) {
    throw new Error('Missing arguments');
  }

  if (path.resolve(patchToCopy) !== path.resolve(patchToPaste)) {
    fs.copyFileSync(patchToCopy, patchToPaste);
  }
} catch (error) {
  console.error(error.message);
}
