'use strict';

const fs = require('fs');
const path = require('path');

const customCopyFile = (sourceFile, destinationFile) => {
  if (destinationFile === undefined) {
    process.stderr.write('should be 2 params');

    return;
  }

  if (sourceFile === destinationFile) {
    return;
  }

  const sourcePath = path.join(__dirname, '..', '..', sourceFile);
  const destinationPath = path.join(__dirname, '..', '..', destinationFile);

  try {
    fs.copyFileSync(sourcePath, destinationPath);
  } catch (err) {
    if (err.code === 'EISDIR' || err.code === 'EPERM') {
      process.stderr.write('source or destination is a directory');
    }

    if (err.code === 'ENOENT') {
      process.stderr.write('non-existent source file');
    }
  }
};

module.exports = {
  customCopyFile,
};
