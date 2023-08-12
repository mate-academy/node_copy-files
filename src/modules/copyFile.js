/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFile(firstPath, secondPath) {
  if (firstPath === secondPath) {
    console.log('These 2 files are the same.');

    return;
  }

  fs.copyFile(firstPath, secondPath, (err) => {
    if (err) {
      console.log('Error copying this file');

      return;
    }

    console.log(`${firstPath} has been successfuly copied to ${secondPath}`);
  });
}

module.exports = { copyFile };
