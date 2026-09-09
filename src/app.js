/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');

function copyFile() {
  const args = process.argv.slice(2);
  const [source, dest] = args;

  if (source === dest) {
    return;
  }

  try {
    fs.copyFile(source, dest);
  } catch (err) {
    console.log(err);
  }
}

copyFile();

module.exports = { copyFile };
