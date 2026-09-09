'use strict';

const { copyFile } = require('./copyFile');

const [source, destination] = process.argv.slice(2);

copyFile(source, destination);
