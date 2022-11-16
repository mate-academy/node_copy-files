'use strict';

const fs = require('fs');
const path = require('path');

const [filePath, copyPath] = process.argv.slice(2);

function copyFile(initialFile, targetPath) {
  if (initialFile === targetPath) {
    return;
  }

  const initialPath = path.join(__dirname, initialFile);
  const fileData = fs.readFileSync(initialPath, 'utf-8');

  fs.writeFileSync(targetPath, fileData);
}

copyFile(filePath, copyPath);
