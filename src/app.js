'use strict';

const fs = require('fs');
const path = require('path');

const copyFile = (fromFile, toFile) => {
  const fromPath = path.join(__dirname, fromFile);
  const toPath = path.join(__dirname, toFile);

  if (fromPath === toPath) {
    throw new Error('You are trying to copy to the same location.');
  }

  if (!fs.existsSync(fromPath)) {
    throw new Error('The file does not exist.');
  }

  const dataToCopy = fs.readFileSync(fromPath, 'utf8');

  fs.writeFileSync(toPath, dataToCopy);
};

copyFile('from.txt', 'to.txt');
