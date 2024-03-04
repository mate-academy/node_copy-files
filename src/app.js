'use strict';
/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');

function copyFile(fileSoursePath, fileDestinationPath) {
  if (!source || !destination) {
    console.error('only one argument');

    return;
  }

  const sourcePath = path.resolve(fileSoursePath);
  const destinationPath = path.resolve(fileDestinationPath);

  if (sourcePath === destinationPath) {
    return;
  }

  try {
    fs.copyFileSync(sourcePath, destinationPath);
  } catch (error) {
    console.error(error);
  }
}

const source = process.argv[2];
const destination = process.argv[3];

copyFile(source, destination);
