'use strict';

const fs = require('fs/promises');
const path = require('path');
const [sourceFile, destinationFile] = process.argv.slice(2);

function copy(src, dest) {
  const srcPath = path.join(__dirname, `/${src}`);
  const destPath = path.join(__dirname, `/${dest}`);

  (async() => {
    try {
      await fs.copyFile(srcPath, destPath);
    } catch (error) {
      global.console.log(error);
    }
  })();
}

copy(sourceFile, destinationFile);
