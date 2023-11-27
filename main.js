'use strict';

const { copyFile } = require('./src/copyFile.js');

const main = () => {
  const [, , fromPath, toPath] = process.argv;

  if (process.argv.length !== 4) {
    return;
  }
  copyFile(fromPath, toPath);
};

module.exports = { main };
