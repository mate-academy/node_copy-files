'use strict';

const { copy } = require('./copy');

const [fileToRead, fileToCopy] = process.argv.slice(2);

copy(fileToRead, fileToCopy);
