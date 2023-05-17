/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const copyFile = (sourcePath, destPath) => {
  if (sourcePath === destPath) {
    console.log('source and dest paths are the same');

    return;
  }

  fs.copyFileSync(sourcePath, destPath, (error) => {
    if (error) {
      console.error(`Error while copying file: ${error}`);
    } else {
      console.log('File copied successfully.');
    }
  });
};

const [source, dest] = process.argv.slice(2);

copyFile(source, dest);
