'use strict';

const fs = require('fs');
const path = require('path');

const copyFile = (from, to) => {
  if (from === to) {
    return;
  }

  const fromPath = path.join(__dirname, from);
  const toPath = path.join(__dirname, to);

  fs.copyFileSync(fromPath, toPath);
};

module.exports = { copyFile };
