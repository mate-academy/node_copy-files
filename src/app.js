/* eslint-disable no-console */
'use strict';

function copyFile() {
  const fs = require('fs');
  const arg = process.argv.slice(2);

  if (arg.length !== 2) {
    console.error('must be a two argument');

    return;
  }

  if (arg[0] === arg[1]) {
    console.error('copy file must be a new directory');

    return;
  }

  fs.copyFile(arg[0], arg[1], (error) => {
    if (error) {
      console.error('copy faile do not found', error);
    }
  });
}

copyFile();
