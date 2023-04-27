'use strict';

const { copy } = require('./copy');

const [copiedFilePath, newPath] = process.argv.slice(2);

copy(copiedFilePath, newPath);
