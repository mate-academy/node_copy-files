'use strict';
/* eslint-disable no-console */

const { copyFile } = require('./copyFile.js');

const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error('only one argument is provided');
} else {
  copyFile(args[0], args[1]);
}
