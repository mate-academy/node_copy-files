'use strict';

const fs = require('fs');

const copyFile = (fromPath, toPath) => {
  if (fromPath === toPath) {
    return;
  }
  fs.copyFileSync(fromPath, toPath);
};

module.exports = {
  copyFile,
};
