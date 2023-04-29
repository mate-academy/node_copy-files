/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFileToDestination() {
  const [sourcePath, destinationPath] = process.argv.slice(2);

  if (process.argv.length < 4) {
    console.log('Please enter file name and destination to copy');

    return;
  }

  if (!fs.existsSync(sourcePath)) {
    console.log('File path which you want to copy doesnt exist');

    return;
  }

  if (sourcePath === destinationPath) {
    console.log('You are trying to copy file to the same destination');

    return;
  }

  fs.copyFile(sourcePath, destinationPath, (error) => {
    if (error) {
      console.log(error);

      return;
    }

    console.log('File was coppied');
  });
}

copyFileToDestination();
