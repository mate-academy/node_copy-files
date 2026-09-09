'use strict';

const fs = require('fs');

const copy = () => {
  const [copyFile, insertFile] = process.argv.slice(2);

  if (copyFile === insertFile) {
    return;
  }

  const data = fs.readFileSync(copyFile, 'utf8');

  fs.writeFileSync(insertFile, data);
};

copy();
