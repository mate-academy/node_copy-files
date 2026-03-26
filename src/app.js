'use strict';

/* eslint-disable no-console */

const fs = require('fs');

function copyFile() {
  const arg = process.argv.slice(2);

  const source = arg[0];
  const destination = arg[1];

  try {
    fs.copyFileSync(source, destination);
  } catch (error) {
    console.error(error.message);
  }
}

copyFile();
