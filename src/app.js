'use strict';

const { copyFiles } = require('./copyFiles');

const sourseFile = process.argv[2];
const destinationFile = process.argv[3];

copyFiles(sourseFile, destinationFile);
