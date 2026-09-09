'use strict';

const fs = require('fs');
const path = require('path');

/**
 * @param {string} from
 * @param {string} to
 */

function copyFile(from, to) {
  const resolveFrom = path.resolve(from);
  const resolveTo = path.resolve(to);

  if (resolveFrom === resolveTo) {
    return;
  }

  fs.copyFile(from, to, (error) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.error(`Error copying file: ${error.message}`);
    }
  });
}

const params = process.argv.slice(2);

if (params.length !== 2) {
  // eslint-disable-next-line no-console
  console.error('Usage: node app.js <source> <destination>');
} else {
  const src = params[0];
  const dest = params[1];

  copyFile(src, dest);
}
