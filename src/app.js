/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const copyFile = (fileName, copyFileName) => {
  if (!fileName || !copyFileName) {
    console.error('Enter right path to the files');
  } else {
    try {
      fs.copyFileSync(fileName, copyFileName);
      console.log('File copyed successfully');
    } catch (err) {
      console.error(`Copying failed with an error: ${err}`);
    }
  }
};

const [pathToCopy, pathToPaste] = process.argv.slice(2);

copyFile(pathToCopy, pathToPaste);
