/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function copyFiles(source, destination) {
  fs.copyFile(source, destination, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('File copied successfully.');
    }
  });
}

const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error('Usage: node app.js <source> <destination>');
} else {
  const [source, destination] = args.map((arg) => path.resolve(arg));

  copyFiles(source, destination);
}

module.exports = {
  copyFiles,
};
