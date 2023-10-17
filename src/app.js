'use strict';

const fs = require('fs');

const { command, from, to } = process.argv;

console.log(command, from, to);

if (command === 'copy' && from !== to) {
  fs.writeFile(fs.readFile(from));
  fs.rm(from);
}
