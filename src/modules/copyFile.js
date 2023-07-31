'use strict';

const fs = require('fs');

const copyFile = (sourcePath, destPath) => {
  if (sourcePath === destPath) {
    return;
  }

  try {
    const data = fs.readFileSync(sourcePath, 'utf-8');

    fs.writeFileSync(destPath, data, 'utf-8');
  } catch (error) {
    throw new Error('Something went wrong: ', error);
  }
};

module.exports = { copyFile };
