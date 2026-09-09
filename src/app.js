/* eslint-disable no-console */
'use strict';

const { copyFile } = require('./copyFile');

copyFile('./test.txt', './test-copy.txt');
