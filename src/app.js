/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFiles(src, dest) {
  fs.stat(src, (err, stats) => {
    if (err) {
      console.error(`Error reading source file: ${err.message}`);

      return;
    }

    if (!stats.isFile()) {
      console.error('Source is not a file.');

      return;
    }

    fs.copyFile(src, dest, (copyErr) => {
      if (copyErr) {
        console.error(`Error copying file: ${copyErr.message}`);

        return;
      }

      console.log('File copied successfully!');
    });
  });
}

const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error('Usage: node app.js <sourcePath> <destPath>');
  process.exit();
}

copyFiles(args[0], args[1]);
