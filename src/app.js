'use strict';

const { copy } = require('./copy');

const [fileToRead, fileToCopy] = process.env.slice(2);

copy(fileToRead, fileToCopy);
