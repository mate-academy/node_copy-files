/* eslint-disable no-console */
'use strict';

const fs = require('node:fs');

const [source, destination] = process.argv.slice(2);

if (source !== destination) {
  try {
    const data = fs.readFileSync(source, 'utf8');

    fs.writeFileSync(destination, data, 'utf8');
  } catch (err) {
    console.error(err);
  }
}
