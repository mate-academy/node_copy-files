'use strict';

const { copyFile } = require('./copyFile.js');

const [fileToCopy, fileToCreate] = process.argv.slice(2);

copyFile(fileToCopy, fileToCreate);
