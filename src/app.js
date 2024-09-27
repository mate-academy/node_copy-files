'use strict';

const fs = require('fs');

function fileCopy(sourceFile, destFile) {
  if (sourceFile === destFile) {
    throw new Error('The file already exist');
  }

  if (!fs.existsSync(sourceFile)) {
    throw new Error('Nothing to copying');
  }

  fs.copyFileSync(sourceFile, destFile);
}

const [source, dest] = process.argv.slice(2);

fileCopy(source, dest);
