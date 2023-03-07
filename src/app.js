'use strict';

const { copyFileIn } = require('./copyFileIn.js');
const [fromPath, toPath] = process.argv.slice(2);

copyFileIn(fromPath, toPath);
