'use strict';

const fs = require('fs');
const path = require('path');

const customCopyFile = () => {
  const inputArgs = process.argv.slice(2);

  if (inputArgs.length !== 2) {
    process.stderr.write('should be 2 params');

    return;
  }

  const [sourceFile, destinationFile] = inputArgs;

  if (sourceFile === destinationFile) {
    return;
  }

  const sourcePath = path.join(__dirname, '..', sourceFile);
  const destinationPath = path.join(__dirname, '..', destinationFile);

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

customCopyFile();
