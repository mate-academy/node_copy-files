/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const src = process.argv[2];
const dest = process.argv[3];

function copyCallback(err) {
  if (err) throw err;
  console.log(src + ' was copied to ' + dest);
}

if (src === dest) {
  console.log('Error! You try to copy to the same directory');
} else {
  fs.copyFile(src, dest, copyCallback);
}
