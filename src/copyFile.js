'use strict';

const fs = require('fs');
const path = require('path');

const copyFile = (fileName, copyFileName) => {
  const data = fs.readFileSync(
    path.join(__dirname, fileName)
  ).toString();

  fs.writeFileSync(
    path.join(__dirname, copyFileName),
    data,
  );
};

module.exports = {
  copyFile,
};
