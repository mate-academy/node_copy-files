'use strict';

const { copyFile } = require('./copyFile');

const [, , src, dest] = process.argv;

copyFile(src, dest);
