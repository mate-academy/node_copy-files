'use strict';

const fs = require('fs');
const path = require('path');

const copyFile = (fromFile, toFile) => {
  if (!fromFile || !toFile) {
    throw new Error('Missing second argument, please enter both arguments!');
  }

  if (fromFile === toFile) {
    return;
  }

  const pathFrom = path.join(__dirname, fromFile);
  const pathTo = path.join(__dirname, toFile);

  try {
    const data = fs.readFileSync(pathFrom, 'utf-8');

    fs.writeFileSync(pathTo, data);
  } catch (error) {
    throw new Error(`Has error - ${error.message}`);
  }
};

module.exports = {
  copyFile,
};
