/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const copyFile = (sourcePath, destPath) => {
  if (sourcePath === destPath) {
    console.log(
      `Failed to copy file. Source and destination paths are the same.`
    );

    return;
  }

  try {
    const data = fs.readFileSync(sourcePath, 'utf-8');

    fs.writeFileSync(destPath, data, 'utf-8');

    console.log(`File copied from ${sourcePath} to ${destPath}`);
  } catch (error) {
    throw new Error('Failed to copy file', error);
  }
};

module.exports = { copyFile };
