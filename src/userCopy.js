'use strict';

const fs = require('fs');
const path = require('path');

const userCopy = function(copyFrom, copyTo) {
  const pathToFile = path.join(`${__dirname}\\${copyFrom}`);
  const copyFile = path.join(`${__dirname}\\${copyTo}`);

  const text = fs.readFileSync(copyFile, 'utf-8');

  fs.writeFileSync(pathToFile, text, 'utf-8');
};

module.exports = {
  userCopy,
};
