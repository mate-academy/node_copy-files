/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [srcFile, destFile] = process.argv.slice(2);

if (!destFile) {
  console.error('Expect 2 arguments');
}

if (srcFile === destFile) {
  console.error('File is already exist');
}

try {
  const content = fs.readFileSync(srcFile, 'utf-8');

  fs.writeFileSync(destFile, content, 'utf-8');
} catch (error) {
  console.error('Error: ', error);
}
