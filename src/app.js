/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
'use strict';

const fs = require('fs');

const copyFile = async () => {
  const [_bin, _app, srcFile, destinationFile] = process.argv;

  if (!srcFile || !destinationFile) {
    console.error('No such file of destination');

    return;
  }

  if (srcFile === destinationFile) {
    return;
  }

  fs.readFile(srcFile, (readingErr, fileCopy) => {
    if (readingErr) {
      console.error(readingErr);
    } else {
      fs.writeFile(destinationFile, fileCopy, (writingErr) => {
        if (writingErr) {
          console.error(writingErr);
        }
      });
    }
  });
};

copyFile();
