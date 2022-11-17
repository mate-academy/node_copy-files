'use strict';

const fs = require('fs');
const path = require('path');

const copyFile = (fromFile, toFile) => {
  const absFromPath = path.join(__dirname, fromFile);
  const absToPath = path.join(__dirname, toFile);

  const content = fs.readFileSync(absFromPath, 'utf-8');

  fs.writeFileSync(absToPath, content);
};

copyFile('file.txt', 'file-copy.txt');
