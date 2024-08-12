/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function cp(location1, location2) {
  try {
    fs.copyFileSync(location1, location2);
    console.log('File copied');
  } catch (err) {
    console.error('Failed to copy file:', err);
  }
}

const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error('Usage: node yourScript.js <source> <destination>');
}

const [source, destination] = args;

cp(source, destination);

module.exports = {
  cp,
};
