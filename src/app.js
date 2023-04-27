/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function copyFileToDestination() {
  const [src, dest] = process.argv.slice(2);

  if (process.argv.length < 4) {
    console.log('Please enter file name and destination to copy');

    return;
  }

  if (src === dest) {
    console.log('You are trying to copy file to the same destination');

    return;
  }

  const source = path.join(__dirname, src);
  const destination = path.join(__dirname, dest);

  fs.copyFile(source, destination, (error) => {
    if (error) {
      console.log(error);

      return;
    }

    console.log('File was coppied');
  });
}

copyFileToDestination();
