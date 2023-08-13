'use strict';

const fs = require('fs');
const path = require('path');

const defaultPath = path.join(__dirname, '../');

const makeFullPath = (pathToAdd) => {
  return path.join(defaultPath, pathToAdd);
};

function copyFile(souceFilePath, copyFilePath) {
  const fileContent = fs.readFileSync(makeFullPath(souceFilePath), 'utf8');

  fs.writeFileSync(makeFullPath(copyFilePath), fileContent);
}

module.exports = { copyFile };
