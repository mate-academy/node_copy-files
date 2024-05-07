/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFile() {
  const [source, destination] = process.argv.slice(2);

  if (source === destination) {
    return;
  }

  try {
    fs.copyFileSync(source, destination);
  } catch (error) {
    console.error(error);
  }
}

copyFile();
