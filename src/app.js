'use strict';

const fs = require('fs');

function copyFiles(pathFrom, pathTo) {
  let fileData = '';

  try {
    fileData = fs.readFileSync(pathFrom, 'utf8');
  } catch (error) {}

  try {
    fs.writeFileSync(pathTo, fileData);
  } catch (error) {}
}

module.exports = { copyFiles };
