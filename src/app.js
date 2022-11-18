/* eslint-disable no-console */
'use strict';

const { validation } = require('./validation');

function copyFiles(from, to) {
  return validation(from, to);
}

const request = process.argv.slice(2);
const pathFrom = request[0];
const pathTo = request[1];

copyFiles(pathFrom, pathTo);

module.exports = { copyFiles };
