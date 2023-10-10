/* eslint-disable no-console */
'use strict';
const fs = require('fs');

function copy(fileToCopy, copyOfFile) {
  console.log('Copying has started...');

  if (fileToCopy === copyOfFile) {
    console.log('You chose the same file name');
    return;
  }

  try {
    fs.copyFileSync(fileToCopy, copyOfFile);

    console.log('Copy is done');
  } catch (error) {
    console.log(error);
  }
}

const copyFrom = process.argv[2];
const copyTo = process.argv[3];

copy(copyFrom, copyTo);
