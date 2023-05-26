'use strict';

const fs = require('fs');

const [copyFrom, copyTo] = process.argv.slice(2);

fs.copyFileSync(`src/${copyFrom}`, `src/${copyTo}`);
