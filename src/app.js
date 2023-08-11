/* eslint-disable no-console */
'use strict';

const path = require('path');
const { copyFile } = require('./copyFile');

const cp = () => {
  const [source, dest] = process.argv.slice(2);

  if (!source || !dest) {
    throw new Error(
      'You have to pass source and dest files path'
    );
  }

  const sourcePath = path.isAbsolute(source)
    ? source
    : path.join(__dirname, source);
  const destPath = path.isAbsolute(dest) ? dest : path.join(__dirname, dest);

  if (sourcePath === destPath) {
    console.log(
      `Failed to copy file. Source and destination paths are the same.`
    );

    return;
  }

  copyFile(sourcePath, destPath);
};

cp();
