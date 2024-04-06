/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFile() {
  const [src, dest] = process.argv.slice(2);

  if (!dest) {
    console.error('Please provide two arguments');
  }

  try {
    if (src && dest && src !== dest) {
      const fileData = fs.readFileSync(src, 'utf8');

      fs.writeFileSync(dest, fileData);
    }
  } catch (err) {
    console.error(err);
  }
}

copyFile();
