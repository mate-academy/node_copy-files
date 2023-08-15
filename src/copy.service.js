'use strict';

const fs = require('fs');

const copy = (from, to) => {
  try {
    const data = fs.readFileSync(from);

    fs.writeFileSync(to, data);
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = { copy };
