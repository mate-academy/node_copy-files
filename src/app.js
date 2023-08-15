'use strict';

const fs = require('fs');
const path = require('path');

function coppyFile(fileToCopy, newFile) {
  if (fileToCopy === newFile) {
    return;
  }

  const dataToWrite = fs.readFileSync(fileToCopy, { encoding: 'utf-8' });

  fs.writeFileSync(newFile, dataToWrite);
}

const fromFile = path.join(__dirname, process.argv[2]);
const toFile = path.join(__dirname, process.argv[3]);

coppyFile(fromFile, toFile);
