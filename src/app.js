/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(fileSourcePath, fileDestinationPath) {
  if (!fileSourcePath || !fileDestinationPath) {
    console.error('only one argument');

    return;
  }

  if (fileSourcePath === fileDestinationPath) {
    console.error('equal argument');

    return;
  }

  const fullSource = path.resolve(fileSourcePath);
  const fullDestination = path.resolve(fileDestinationPath);

  fs.copyFile(fullSource, fullDestination, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

const [source, destination] = process.argv.slice(2);

copyFile(source, destination);
