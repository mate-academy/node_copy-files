'use strict';
/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const [filePath, copyPath] = process.argv.slice(2);

function copyFile(file, copy) {
  if (file === copy) {
    console.log('Can not copy to the same file!');
    process.exit();
  }

  const basePath = path.join(__dirname, file);
  const data = fs.readFileSync(basePath, 'utf-8');

  fs.writeFileSync(copy, data);
}

copyFile(filePath, copyPath);
