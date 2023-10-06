/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copy(source, dest) {
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

module.exports = { copy };
