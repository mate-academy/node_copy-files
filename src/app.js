'use strict';

const fs = require('fs');

const copyFile = (copyFrom, copyTo) => {
  if (copyFrom === copyTo) {
    throw new Error('The pathes are the same');
  }

  if (!copyFrom || !copyTo) {
    throw new Error('You should enter 2 valid pathes');
  }

  fs.copyFileSync(copyFrom, copyTo, (err) => {
    if (err) {
      throw new Error('Something went wrong');
    }

    return 'The file was copied successfully';
  });
};

const [source, destination] = process.argv.slice(2);

copyFile(source, destination);
