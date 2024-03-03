/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const sourcePath = process.argv[2];
const copyPath = process.argv[3];

try {
  fs.copyFileSync(sourcePath, copyPath);
} catch (err) {
  if (err.code === 'ENOENT') {
    console.error('No such file');
  }

  if (err.code === 'EISDIR') {
    console.error('It is a directori');
  }

  if (err.code === 'ERR_INVALID_ARG_TYPE') {
    console.error('Specified second argument');
  }

  if (err.code === 'EPERM') {
    console.error('Operation not permitted');
  }
}
