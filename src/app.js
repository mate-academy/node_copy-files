'use strict';

const { copyFile } = require('./copyFile');

const [sourcePath, destinationPath] = process.argv.slice(2);

copyFile(sourcePath, destinationPath);
