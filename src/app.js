'use strict';

const fs = require('fs');

const copyFile = (initialFilePath, fileToChangePath) => {
  const newData = fs.readFileSync(initialFilePath, { encoding: 'utf-8' });

  fs.writeFileSync(fileToChangePath, newData);
};

copyFile(`${__dirname}/init.txt`, `${__dirname}/example.txt`);

module.exports.copyFile = copyFile;
