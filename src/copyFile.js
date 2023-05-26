'use strict';

const fs = require('fs');
// const path = require('path');

const copyFile = (pathToSourceFile, pathToCopyFile) => {
  const sourceFileContent = fs.readFileSync(pathToSourceFile, 'utf-8');

  fs.writeFileSync(pathToCopyFile, sourceFileContent, 'utf-8');
};

module.exports = {
  copyFile,
};
