/* eslint-disable no-console */
'use strict';

const fs = require('node:fs');

if (process.argv.length !== 4) {
  console.error('Bad request.');
  process.exit();
}

const [sourceFile, destinationFile] = process.argv.splice(2);

if (sourceFile !== destinationFile) {
  try {
    fs.writeFileSync(destinationFile, fs.readFileSync(sourceFile, 'utf8'));
  } catch (err) {
    switch (err.code) {
      case 'EISDIR':
        console.error('This is a directory.');
        break;

      case 'ENOENT':
        console.error('No such file.');
        break;
    }
  }
}
