'use strict';
const fs = require('fs');
const path = require('path');
const [filePath, copyFilePath] = process.argv.slice(2);

const copyFile = (file, copy) => {
  const mainPath = path.join(__dirname, file);
  const data = fs.readFileSync(mainPath, 'utf-8');

  fs.writeFileSync(copy, data);
}

copyFile(filePath, copyFilePath)