/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFiles() {
  const params = process.argv.slice(2);
  const [srcPath, destPath] = params;

  if (srcPath === destPath) {
    return;
  }

  try {
    fs.copyFileSync(srcPath, destPath);

    console.log('File copied successfully!');
  } catch (error) {
    console.error(error);
  }
}

copyFiles();
