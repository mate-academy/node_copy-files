'use strict';

const fs = require('fs');

if (process.argv[2] === process.argv[3]) {
  return;
}

const content = fs.readFileSync(process.argv[2], 'utf8');

fs.writeFileSync(process.argv[3], content);
