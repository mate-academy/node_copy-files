/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const args = process.argv.slice(2);

if (args[0] === 'cp' && args[1] !== args[2]) {
  copyFile(args[1], args[2]);
}

function copyFile(file, copy) {
  if (!file || !copy) {
    return 'Write file name which need copy and name copy file.';
  }

  try {
    const textFromFile = fs.readFileSync(`${file}`, 'utf8');

    fs.writeFileSync(`${copy}`, textFromFile);
  } catch (error) {
    return error;
  }
}
