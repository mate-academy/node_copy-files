/* eslint-disable no-console */
'use strict';

const { copyFile } = require('./copyFile.js');

function copyFiles(from, to) {
  return copyFile(from, to);
}

const [pathFrom, pathTo] = process.argv.slice(2);

copyFiles(pathFrom, pathTo);

module.exports = { copyFiles };
