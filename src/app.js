'use strict';

const fs = require('fs');

function coppyFile(fileToCopy, newFile) {
  if (fileToCopy === newFile) {
    return;
  }

  const dataToWrite = fs.readFileSync(fileToCopy);

  fs.writeFileSync(newFile, dataToWrite);
}

const fromFile = process.argv[2];
const toFile = process.argv[3];

coppyFile(fromFile, toFile);
