/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const firstFile = process.argv[2];
const secondFile = process.argv[3];

function copyFile(source, destination) {
  if (source === destination) {
    console.error('Source and destination are the same');

    return;
  }

  try {
    const data = fs.readFileSync(source);

    fs.writeFileSync(destination, data);
  } catch (error) {
    console.error(`Error copying file: ${error.message}`);
  }
}

copyFile(firstFile, secondFile);

module.exports = { copyFile };
