/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFiles() {
  const [source, dest] = process.argv.slice(2);

  if (!dest) {
    console.error('Please provide two arguments');

    return;
  }

  if (source === dest) {
    return;
  }

  fs.cp(source, dest, (error) => {
    if (error) {
      console.error(error);
    }
  });
}

copyFiles();
