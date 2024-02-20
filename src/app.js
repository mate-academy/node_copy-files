'use strict';

const { copyFile } = require('./copyFile');

const [fileName, copyFileName] = process.argv.slice(2);

copyFile(fileName, copyFileName);
