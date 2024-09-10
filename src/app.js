'use strict';
/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');

function copyFile(from, to) {
  const fromPath = path.resolve(from);
  const toPath = path.resolve(to);

  if (fromPath === toPath) {
    return console.error('links are the same');
  }

  fs.copyFile(fromPath, toPath, err => {
    if (err) {
      console.error(err);
    }
  });
}

const args = process.argv.slice(2);
const fromFile = args[0];
const toFile = args[1];

if (!fromFile || !toFile) {
  console.error('one of the paths is not correct');
} else {
  copyFile(fromFile, toFile);
}
