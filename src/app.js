'use strict';

/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');

try {
  const args = process.argv.slice(2);

  if (args.length !== 2) {
    console.error('Error');
  } else {
    const [srcPath, destPath] = args;

    const src = path.resolve(srcPath);
    const dest = path.resolve(destPath);

    if (src !== dest) {
      const srcStat = fs.statSync(src);

      if (!srcStat.isFile()) {
        console.error('Error');
      } else if (fs.existsSync(dest) && fs.statSync(dest).isDirectory()) {
        console.error('Error');
      } else {
        fs.copyFileSync(src, dest);
      }
    }
  }
} catch (err) {
  console.error(err);
}
