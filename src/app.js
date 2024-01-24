'use strict';

const fs = require('fs');

const copyFile = (from, to) => {
  if (from === to || !from || !to) {
    return;
  }

  const stats = fs.statSync(from);

  if (!stats.isFile()) {
    return;
  }

  fs.copyFileSync(from, to);
};

copyFile(...process.argv.slice(2));
