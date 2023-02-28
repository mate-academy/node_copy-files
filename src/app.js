'use strict';

const { makeCopy } = require('./copy');

const [from, to] = process.argv.slice(2);

makeCopy(from, to);
