'use strict';

const { copyFile } = require('./modules/copyFile.js');

copyFile(process.argv[2], process.argv[3]);
