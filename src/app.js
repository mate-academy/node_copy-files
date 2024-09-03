'use strict';

const { copyFile } = require('./copy');

const [fromPath, toPath] = process.argv.slice(2);

copyFile(fromPath, toPath);
