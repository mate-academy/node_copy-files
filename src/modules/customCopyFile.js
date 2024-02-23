/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const customCopyFile = (sourceFile, destinationFile) => {
  if (destinationFile === undefined) {
    console.error('should be 2 params');

    return;
  }

  try {
    fs.copyFileSync(sourceFile, destinationFile);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  customCopyFile,
};
