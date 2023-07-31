'use strict';

const path = require('path');
const { copyFile } = require('./modules/copyFile.js');

const startCopy = () => {
  const [source, dest] = process.argv.slice(2);

  if (!source || !dest) {
    throw new Error(
      'You should pass the way to the source file and the way to the dest file.'
    );
  }

  const sourcePath = path.join(__dirname, source);
  const destPath = path.join(__dirname, dest);

  copyFile(sourcePath, destPath);
};

startCopy();
