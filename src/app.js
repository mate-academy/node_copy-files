/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFile() {
  const [from, to] = process.argv.slice(2);

  if (from === to) {
    console.error('Must be source and destination');

    return;
  }

  if (!from || !to) {
    console.error('Must be 2 arguments');

    return;
  }

  try {
    fs.copyFileSync(from, to);
    console.log('Copy succeeded');
  } catch (error) {
    console.error('Copy failed:', error.message);
  }
}

copyFile();

module.exports = { copyFile };
