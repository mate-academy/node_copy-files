'use strict';

const fs = require('fs');
const { readAndWriteFile } = require('./helpers.js');

const copyFile = (source, destination) => {
  if (!fs.existsSync(source)) {
    throw Error(`Error: Source file "${source}" does not exist.`);
  }

  readAndWriteFile(source, destination);
};

module.exports = { copyFile };
