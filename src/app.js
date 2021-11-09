/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const { exit } = require('process');

fs.copyFile(
  './src/file.txt',
  './src/destination/file.txt',
  fs.constants.COPYFILE_EXCL,
  (error) => {
    if (error) {
      console.log(error);
      exit();
    }

    console.log('Successfully copied!');
  }
);
