'use strict';

const fs = require('fs');

const [fileName, newFileName] = process.argv.slice(2);

function copy() {
  fs.copyFileSync(fileName, newFileName);
}

copy();
