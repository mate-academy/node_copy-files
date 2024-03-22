/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [sourceFilePath, copyFilePath] = process.argv.slice(2);

if (!copyFilePath) {
  console.error('There must be 2 arguments');
}

if (sourceFilePath === copyFilePath) {
  console.error('This is same file');
}

try {
  const content = fs.readFileSync(sourceFilePath, 'utf-8');

  fs.writeFileSync(copyFilePath, content, 'utf-8');
  console.log('File copied successfully');
} catch (error) {
  console.error('An error occured: ', error);
}
