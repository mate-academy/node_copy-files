/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFile(srcFile, destFile) {
  if (!destFile) {
    console.error('2 arguments expected.');

    return;
  }

  if (srcFile === destFile) {
    console.error('Error: Source and destination are the same.');

    return;
  }

  try {
    const content = fs.readFileSync(srcFile, 'utf-8');

    fs.writeFileSync(destFile, content, 'utf-8');
    console.log(`File ${srcFile} copied to ${destFile} successfully.`);
  } catch (error) {
    console.error('Error: ', error);
  }
}

const [source, destination] = process.argv.slice(2);

copyFile(source, destination);
