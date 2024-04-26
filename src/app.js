/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const params = process.argv.slice(2);
const from = params[0];
const to = params[1];

try {
  fs.copyFileSync(from, to);
  console.log(`File ${from} copied to ${to}`);
} catch (error) {
  console.error('Error copying file:', error);
}
