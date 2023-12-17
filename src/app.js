'use strict';

const fs = require('fs');

const copy = () => {
  if (process.argv[2] === process.argv[3]) {
    return;
  }

  try {
    const data = fs.readFileSync(process.argv[2], 'utf-8');

    fs.writeFile(process.argv[3], data, 'utf-8', () => {});
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  copy,
};
