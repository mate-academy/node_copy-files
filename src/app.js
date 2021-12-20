/* eslint-disable no-console */
'use strict';

const fs = require('fs');

let fileContent;
const fileName = process.argv[2];
const newFileName = process.argv[3];

if (fileName === newFileName) {
  console.log('Can\'t copy to the same location');

  return;
}

try {
  fileContent = fs.readFileSync(`src/${fileName}`, 'utf8');
} catch (error) {
  throw error;
}

try {
  fs.writeFileSync(`src/${newFileName}`, fileContent);
  console.log('File was successfully copied');
} catch (error) {
  throw error;
}
