'use strict';

const fs = require('fs');

const path = require('path');

const copyFile = (src, dest) => {
  const srcPath = path.join(__dirname, src);
  const destPath = path.join(__dirname, dest);

  if (srcPath === destPath) {
    return;
  }

  try {
    fs.copyFileSync(srcPath, destPath);
  } catch (err) {
    throw new Error(err);
  }
};

const main = () => {
  const [, , arg, src, dest] = process.argv;

  if (arg === 'cp') {
    copyFile(src, dest);
  }
};

main();

module.exports = {
  copyFile,
};
