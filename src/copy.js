'use strict';

const fs = require('fs');

const copy = (src, dest) => {
  if (src === dest) {
    return;
  }

  fs.writeFileSync(dest, fs.readFileSync(src, 'utf8'));
};

module.exports = { copy };
