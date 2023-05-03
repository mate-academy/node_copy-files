'use strict';

const fs = require('fs-extra');

const command = process.argv[2];
const originalFile = process.argv[3];
const copyFile = process.argv[4];

if (command === 'cp' && originalFile !== copyFile) {
  fs.copy(originalFile, copyFile, (err) => {
    if (err) {
      return err;
    }

    return 'success';
  });
}
