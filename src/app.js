'use strict';

const fs = require('fs');

const copyFile = (src, dest) => {
  if (src === dest || !src || !dest) {
    throw new Error('Unable to copy file');
  }

  const stats = fs.statSync(src);

  if (!stats.isFile()) {
    return;
  }

  fs.copyFileSync(src, dest);
};

copyFile(...process.argv.slice(2));
