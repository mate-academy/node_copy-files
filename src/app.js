'use strict';

const fs = require('fs');

const cp = (fileSrc, fileDes) => {
  if (fileSrc === fileDes) {
    return;
  }

  const copy = fs.readFileSync(fileSrc, { encoding: 'utf-8' });

  fs.writeFile(fileDes, copy);
};

cp();
