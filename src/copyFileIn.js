'use strict';

const fs = require('fs');
const path = require('path');

function copyFileIn(from, to) {
  if (!from || !to) {
    throw new Error('Script accepts 2 arguments');
  }

  const pathFrom = path.join(__dirname, from);
  const pathTo = path.join(__dirname, to);

  if (pathFrom === pathTo) {
    return;
  }

  try {
    const data = fs.readFileSync(pathFrom, 'utf8');

    try {
      fs.writeFileSync(pathTo, data);
    } catch (error) {
      throw new Error(`Code was fail with - ${error.code}`);
    }
  } catch (error) {
    throw new Error(`Code was fail with - ${error.code}`);
  }
}

module.exports = {
  copyFileIn,
};
