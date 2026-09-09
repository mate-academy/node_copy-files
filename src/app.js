/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const copyFile = (initialFile, targetFile) => {
  if (initialFile === targetFile) {
    console.error('Same location');
  }

  try {
    const initialFileData = fs.readFileSync(initialFile, 'utf8');

    fs.writeFileSync(targetFile, initialFileData, 'utf8');
  } catch (err) {
    console.error(err);
  }
};

const params = process.argv.slice(2);

copyFile(...params);

module.exports = {
  copyFile,
};
