/* eslint-disable no-console */
'use strict';

const { copyFile } = require('./copy');

const source = process.argv[2];
const destination = process.argv[3];

copyFile(source, destination);
