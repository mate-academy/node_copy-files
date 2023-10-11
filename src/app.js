'use strict';

const minimist = require('minimist');
const { makeFileCopy } = require('./makeFileCopy');

function startProgram() {
  const { _: args } = minimist(process.argv.slice(2));

  const copiedFilePath = args[0];
  const newFilePath = args[1];

  makeFileCopy(copiedFilePath, newFilePath);
};

startProgram();
