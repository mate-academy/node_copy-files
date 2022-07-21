/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const firstFile = process.argv[2];
const secondFile = process.argv[3];

if (firstFile === secondFile) {
  return;
}

fs.copyFile(`./src/${firstFile}`, `./src/${secondFile}`, (error) => {
  if (error) {
    console.log(error);

    return;
  }

  console.log('Success');
});
