'use strict';

const fs = require('fs');

module.exports.copyFile = (copyFrom, copyTo) => {
  const data = fs.readFileSync(copyFrom, 'utf-8');

  fs.writeFileSync(copyTo, data);
};
