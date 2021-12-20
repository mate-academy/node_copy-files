/* eslint-disable no-console */
'use strict';

const fs = require('fs');

let fileContent;
const originalFile = process.argv[2];
const copy = process.argv[3];

if (originalFile === copy) {
  console.log('Can\'t copy to the same location');

  return;
}

try {
  fileContent = fs.readFileSync(`src/${originalFile}`, 'utf8');
} catch (error) {
  throw error;
}

try {
  fs.writeFileSync(`src/${copy}`, fileContent);
  console.log('File was successfully copied');
} catch (error) {
  throw error;
}
