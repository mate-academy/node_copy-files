/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const args = process.argv.slice(2);
const [source, destination] = args;

function cp(location1, location2) {
  if (args.length !== 2) {
    console.error('Usage: node yourScript.js <source> <destination>');

    return;
  }

  try {
    fs.copyFileSync(location1, location2);
    console.log('File copied');
  } catch (err) {
    console.error('Failed to copy file:', err);
  }
}

cp(source, destination);

module.exports = {
  cp,
};
