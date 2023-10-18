/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copy() {
  const source = process.argv.slice(1)[1];
  const dest = process.argv.slice(1)[2];

  if (source === dest) {
    console.log('Can \'t copy to same location');

    return;
  }

  try {
    fs.copyFileSync(source, dest);

    console.log('Copied');
  } catch (e) {
    console.log('Something went wrong...', e);
  }
}

copy();

module.exports = { copy };
