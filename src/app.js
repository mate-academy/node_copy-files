/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [source, destination] = process.argv.slice(2);

if (!source) {
  console.log('Please provide source and destination files');

  return;
}

if (!destination) {
  console.log('Please provide destination file');

  return;
}

fs.copyFile(source, destination, err => {
  if (err) {
    throw err;
  }
});
