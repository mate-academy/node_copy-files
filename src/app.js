'use strict';

const { copyFile } = require('./copyFile.js');

const params = process.argv.slice(2);

copyFile(...params);
