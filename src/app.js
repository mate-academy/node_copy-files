'use strict';

const { copyFile } = require('./copyFile.js');

const [sourceFile, copyTo] = process.argv.slice(2);

copyFile(sourceFile, copyTo);
