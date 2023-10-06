/* eslint-disable no-console */
'use strict';
const fs = require('fs');

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

module.exports = {
  copy,
};
