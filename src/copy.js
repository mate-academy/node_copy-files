'use strict';

const fs = require('fs');
const path = require('path');

const makeCopy = (from, to) => {
  const fromPath = path.join(__dirname, from);
  const toPath = path.join(__dirname, to);

  if (fromPath === toPath) {
    return;
  }

  try {
    const content = fs.readFileSync(fromPath);

    fs.writeFileSync(toPath, content);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

module.exports = { makeCopy };
