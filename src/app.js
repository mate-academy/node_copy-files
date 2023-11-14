'use strict';

const fs = require('fs');

function copyFile(sourse, destination) {
  try {
    fs.copyFileSync(sourse, destination);
  } catch (e) {
    throw new Error(e);
  }
}

copyFile(process.argv[2], process.argv[3]);
