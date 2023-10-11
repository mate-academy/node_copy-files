'use strict';

const ADDRESS = require('./constants');
const copyFile = require('./copyFile');

const [addressFrom, addresTo] = ADDRESS.slice(3).split(' ');

copyFile(addressFrom, addresTo);
