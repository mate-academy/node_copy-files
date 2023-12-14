'use strict';
/* eslint-disable */

const fs = require('fs');
const path = require('path');

const src = process.argv[2];
const dest = process.argv[3];

switch (true) {
  case !src: {
    console.log('No source location provided');
    break;
  }

  case !dest: {
    console.log('No destination location provided');
    break;
  }

  case (src === dest): {
    console.log('Source and destination locations are the same');
    break;
  }

  default: {
    const srcPath = path.join(__dirname, process.argv[2]);
    const destPath = path.join(__dirname, process.argv[3]);
    fs.copyFile(srcPath, destPath, fs.constants.COPYFILE_FICLONE, (err) => {
      if (err) {
        console.log('Error found:', err);
      } else {
        console.log("Data has been copied, content of copied file:",
        fs.readFileSync( destPath, "utf8"));
      }
    });
  }
}


