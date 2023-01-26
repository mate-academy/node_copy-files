'use strict';

const { copyFiles } = require('./copyFiles');

const firstFile = process.argv[2];
const secondFile = process.argv[3];

copyFiles(firstFile, secondFile);
