'use strict';

const { copyFile } = require('./copyFile');

const args = process.argv.slice(2);

if (args[0] === 'cp' && args.length === 3) {
  copyFile(...args.slice(1));
}
