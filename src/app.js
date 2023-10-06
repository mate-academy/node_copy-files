'use strict';
const fs = require('fs');

const fileToCopy = process.argv[2];
const copyOfFile = process.argv[3];

function copy(fileToCopy, copyOfFile) {
  console.log('Copying...');

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

copy(fileToCopy, copyOfFile);
