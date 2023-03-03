'use strict';

const { copyFileIn } = require('./copyFileIn.js');
const params = process.argv.slice(2);

copyFileIn(params[0], params[1]);
