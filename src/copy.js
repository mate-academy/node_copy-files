'use strict';

const fs = require('fs/promises');
const path = require('path');

const makeCopy = async(from, to) => {
  const fromPath = path.join(__dirname, from);
  const toPath = path.join(__dirname, to);

  if (fromPath === toPath) {
    return;
  }

  try {
    await fs.copyFile(fromPath, toPath);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

module.exports = { makeCopy };
