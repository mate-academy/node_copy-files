'use strict';

const fs = require('fs');
const path = require('path');

const [fileName, newFileName] = process.argv.slice(2);

function copy() {
  if (fileName === newFileName) {
    // eslint-disable-next-line no-console
    console.log('Name is already exists');

    return;
  }

  const currentPath = path.resolve();

  // eslint-disable-next-line max-len
  fs.copyFileSync(`${currentPath}/src/${fileName}`, `${currentPath}/src/${newFileName}`);
}

copy();
