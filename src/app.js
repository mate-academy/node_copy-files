/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const [source, dest] = process.argv.slice(2);

if (!source || !dest) {
  console.log(
    `Please provide a source file and a destination file name.
     Example: file.txt file-copy.txt.`
  );

  return;
}

if (source === dest) {
  console.log(
    'You are trying to copy to the same location'
  );

  return;
}

const pathFrom = path.join(__dirname, source);
const pathTo = path.join(__dirname, dest);

fs.copyFile(pathFrom, pathTo, (err) => {
  if (err) {
    console.error(err);

    return;
  }

  console.log('Successfully copied!');
});
