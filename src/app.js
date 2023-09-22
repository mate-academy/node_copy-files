/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const copyFile = () => {
  if (process.argv[2] === process.argv[3]) {
    console.log('The paths to the file and the copy are the same');

    return;
  }

  const data = fs.readFileSync(process.argv[2], 'utf8');

  fs.writeFileSync(process.argv[3], data);
};

copyFile();
