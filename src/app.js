'use strict';

const { copyFiles } = require('./copyFiles.js');

const makeCopy = () => {
  const path = process.argv.slice(2);

  copyFiles(path[0], path[1]);
};

module.exports.makeCopy = makeCopy();
