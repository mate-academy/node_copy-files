'use strict';

const fs = require('node:fs');

const copyFile = (src, dest) => {
  if (src === dest) {
    throw new Error('Source and destination are the same');
  }

  fs.copyFile(src, dest, (er) => {
    throw new Error(er);
  });
};

const params = process.argv.slice(2);
const sourceFile = params[0];
const destination = params[1];

copyFile(sourceFile, destination);
