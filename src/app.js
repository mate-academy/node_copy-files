/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFile() {
  const [copyFrom, copyTo] = process.argv.slice(2);

  if (!copyFrom || !copyTo) {
    console.error('Is missing fields');

    return;
  }

  if (copyFrom === copyTo) {
    console.error('Same file, CAN NOT BE the same');
  }

  fs.copyFile(copyFrom, copyTo, (error) => {
    if (error) {
      console.error('Something went wrong:', error);
    }

    console.log('');
    console.log('File copied successfully');
    console.log('');
  });
}

copyFile();
