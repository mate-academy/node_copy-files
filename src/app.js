/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const params = process.argv.slice(2);

if (params.length !== 2) {
  console.log('Incorrect parameters');

  return;
}

const addressFile = path.join(__dirname, params[0]);
const addressCopy = path.join(__dirname, params[1]);

try {
  fs.readFileSync(addressFile, 'utf-8');
} catch (err) {
  console.log('File not found');

  return;
}

try {
  fs.readFileSync(addressCopy, 'utf-8');
  console.log('File exists');

  return;
} catch (err) {}

const content = fs.readFileSync(addressFile, 'utf-8');

try {
  fs.writeFileSync(addressCopy, content);
} catch (err) {
  console.log('Somme error...');
}
