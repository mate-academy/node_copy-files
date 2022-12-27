'use strict';

const copyFile = require('./copyFile').copyFile;

const [src, dest] = process.argv.slice(2);

copyFile(src, dest);
