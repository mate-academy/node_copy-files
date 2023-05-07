/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const { terminal } = require('./terminal');

const copyFileToDestination = () => {
  const [,, sourcePath, destinationPath] = process.argv;

  if (process.argv.length < 4) {
    console.log('Please enter file name and destination to copy');
    start();

    return;
  }

  if (!fs.existsSync(sourcePath)) {
    console.log('File path which you want to copy doesnt exist');
    start();

    return;
  }

  if (sourcePath === destinationPath) {
    console.log('You are trying to copy file to the same destination');
    start();

    return;
  }

  fs.copyFile(sourcePath, destinationPath, (error) => {
    if (error) {
      console.log(error);

      return;
    }

    console.log('File was coppied');
    terminal.close();
  });
};

const start = () => {
  terminal.question(
    'To copy a file u need to write: "copy /file-to-copy/ /new-file/" ',
    copyFileToDestination,
  );
};

start();
