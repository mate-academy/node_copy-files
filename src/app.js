'use strict';

const fs = require('fs');

function copyFile() {
  const [from, to] = process.argv.slice(2);

  if (!from || !to) {
    // eslint-disable-next-line
    console.error('Must be 2 arguments');

    return;
  }

  if (from === to) {
    // eslint-disable-next-line
    console.error('Must be source and destination');

    return;
  }

  try {
    fs.copyFileSync(from, to);
    // eslint-disable-next-line
    console.log('Copy succeeded');
  } catch (error) {
    // eslint-disable-next-line
    console.error('Copy failed:', error.message);
  }
}

copyFile();

module.exports = { copyFile };
