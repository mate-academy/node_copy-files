/* eslint-disable no-console */
'use strict';

const path = require('path');
const { copyFile } = require('./copyFile');

const cp = async() => {
  try {
    const [source, dest] = process.argv.slice(2);
    const sourcePath = path.isAbsolute(source)
      ? source
      : path.join(__dirname, source);
    const destPath = path.isAbsolute(dest) ? dest : path.join(__dirname, dest);

    if (!sourcePath || !destPath) {
      throw new Error(
        'You have to pass source and dest files path'
      );
    }

    await copyFile(sourcePath, destPath);
  } catch (error) {
    throw new Error(error);
  }
};

cp();

module.exports = { cp };
