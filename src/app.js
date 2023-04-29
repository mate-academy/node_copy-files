/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFileToDestination() {
  const [source, dest] = process.argv.slice(2);

  if (process.argv.length < 4) {
    console.log('Please enter file name and destination to copy');

    return;
  }

  if (source === dest) {
    console.log('You are trying to copy file to the same destination');

    return;
  }

  fs.copyFile(source, dest, (error) => {
    if (error) {
      console.log(error);

      return;
    }

    console.log('File was coppied');
  });
}

copyFileToDestination();
