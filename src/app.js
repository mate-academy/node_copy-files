'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(filePath, newPath) {
  const fileDir = path.dirname(filePath);
  const fileName = path.basename(filePath);

  if (fileDir !== newPath) {
    const fileData = fs.readFileSync(filePath, 'utf-8');

    fs.writeFileSync(path.join(newPath, '/', fileName), fileData);
  }
}

module.exports = { copyFile };
