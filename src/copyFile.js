/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(filePath, copyFilePath) {
  const pathToFile = path.join(__dirname, filePath);
  const pathToCopyFile = path.join(__dirname, copyFilePath);

  if (pathToFile === pathToCopyFile) {
    return;
  }

  try {
    const fileData = fs.readFileSync(pathToFile, 'utf-8');

    fs.writeFileSync(pathToCopyFile, fileData);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { copyFile };
