'use strict';

const fs = require('fs');
const path = require('path');

const terminal = process.argv.slice(2);

function copyFile(donerPath, destinationPath) {
  if (donerPath === destinationPath) {
    process.stdout.write('You cannot copy the same file');

    return;
  }

  fs.readFile(path.resolve(donerPath), (err, data) => {
    if (err) {
      process.stdout.write('Error reading file');

      return;
    }

    fs.writeFile(path.resolve(destinationPath), data, (error) => {
      if (error) {
        process.stdout.write('Error writing file');
      }
    });

    process.stdout.write('File copied');
  });
}

if (terminal.length < 2) {
  process.stdout.write('Need any params');
} else {
  const filePath = path.join(__dirname, terminal[0]);
  const newFilePath = path.join(__dirname, terminal[1]);

  copyFile(filePath, newFilePath);
}
