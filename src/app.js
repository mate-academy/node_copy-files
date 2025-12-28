'use strict';

const fs = require('fs');
const path = require('path');

function cp(src, dest) {
  const srcPath = path.resolve(src);
  const destPath = path.resolve(dest);

  if (srcPath === destPath) {
    // eslint-disable-next-line no-useless-return
    return;
  }

  fs.copyFileSync(srcPath, destPath);
}

try {
  const [src, dest] = process.argv.slice(2);

  cp(src, dest);
} catch (error) {
  // eslint-disable-next-line no-console
  console.error('Error copying file:', error.message);
}
