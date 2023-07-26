/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const copy = (src, dest) => {
  if (src === dest) {
    return;
  }

  try {
    const fileContent = fs.readFileSync(src, 'utf8');

    fs.writeFileSync(dest, fileContent);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { copy };
