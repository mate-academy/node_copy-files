'use strict';

const fs = require('fs/promises');
const path = require('path');

const source = process.argv[2];
const destination = process.argv[3];

try {
  fs.copyFile(path.join(__dirname, source), path.join(__dirname, destination));
} catch (err) {
  throw new Error('blo');
}
