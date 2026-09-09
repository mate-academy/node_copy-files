'use strict';

const { copy } = require('./copy');

const [sourcePath, newPath] = process.argv.slice(2);

copy(sourcePath, newPath);
