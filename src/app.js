/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const params = process.argv.slice(2);
const from = params[0];
const to = params[1];

try {
  const file = fs.readFileSync(from, 'utf-8');

  fs.writeFileSync(to, file);
} catch (err) {
  console.error(err);
}
