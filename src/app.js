'use strict';

const { copyFile } = require('./copyFile.js');

const myArgs = process.argv.slice(2);
const destFrom = myArgs[0];
const destTo = myArgs[1];

copyFile(destFrom, destTo);
