'use strict';

const fs = require('fs');
const path = require('path');

// const defaultPath = path.join(__dirname, '../');

const makeFullPath = (pathToAdd) => {
  return path.join(__dirname, '../', pathToAdd);
};

function copyFile(souceFilePath, copyFilePath) {
  const fullSourcePath = souceFilePath.startsWith('.')
    ? makeFullPath(souceFilePath)
    : souceFilePath;

  const fileContent = fs.readFileSync(fullSourcePath, 'utf8');

  fs.writeFileSync(makeFullPath(copyFilePath), fileContent);
}

module.exports = { copyFile };
