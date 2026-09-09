'use strict';

const fs = require('fs');

function copy(src, dest) {
  try {
    fs.copyFileSync(src, dest);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error.message);
  }
}

module.exports = { copy };
