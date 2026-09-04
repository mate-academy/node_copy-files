'use strict';

const fs = require('fs');
const path = require('path');

const fileCopy = (src, dest) => {
  if (src === dest || (!src || !dest)) {
    return;
  }

  const srcPath = path.join(__dirname, `/${src}`);
  const destPath = path.join(__dirname, `/${dest}`);

  const data = fs.readFileSync(srcPath, 'utf-8');

  fs.writeFileSync(destPath, data);
};

const params = process.argv.slice(2);

fileCopy(params[0], params[1]);
