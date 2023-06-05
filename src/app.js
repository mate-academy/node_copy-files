/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const args = process.argv.slice(2);

copyFile(args);

function copyFile([cp, file, copy]) {
  if (cp !== 'cp') {
    console.log('Command copy file should be start: cp');

    return;
  }

  if (!file || !copy) {
    console.log('Write file name which need copy and name copy file');

    return;
  }

  if (file === copy) {
    console.log('Copy should have another name');

    return;
  }

  try {
    const textFromFile = fs.readFileSync(`${file}`, 'utf8');

    fs.writeFileSync(`${copy}`, textFromFile);
  } catch (error) {
    return error;
  }
}
