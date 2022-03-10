'use strict';

const { copyFile } = require('./actions.js');

const src = process.argv[3];
const target = process.argv[4];

copyFile(src, target);
