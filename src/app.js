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

  const sourcePath = path.join(__dirname, source);
  const destPath = path.join(__dirname, dest);

  copyFile(sourcePath, destPath);
};

cp();
