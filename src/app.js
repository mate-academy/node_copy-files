'use strict';

const fs = require('fs');
const path = require('path');

function cp(fileFrom, fileTo) {
  if (fileFrom === fileTo) {
    return;
  }

  try {
    const basePath = path.join(__dirname, fileFrom);
    const content = fs.readFileSync(basePath, 'utf-8');

    fs.writeFileSync(fileTo, content);
  } catch (e) {
    throw new Error(e);
  }
}

cp('test.txt', 'copy-test.txt');
