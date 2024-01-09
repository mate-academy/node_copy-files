'use strict';

const { copyFile } = require('./copyFile');

if (!process.argv.slice(2).length) {
  console.log('Enter source location and new file location');
} else {
  copyFile(process.argv[2], process.argv[3]);
}
