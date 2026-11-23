'use strict';

const [patchToCopy, patchToPaste] = process.argv.slice(2);
const fs = require('fs');
const path = require('path');

try {
  if (!patchToCopy || !patchToPaste) {
    throw new Error('Missing arguments');
  }

  if (path.resolve(patchToCopy) !== path.resolve(patchToPaste)) {
    fs.copyFileSync(patchToCopy, patchToPaste);
  }
} catch (error) {
  process.stderr.write(error.message);
}
