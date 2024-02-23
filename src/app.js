/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const readline = require('readline');
const path = require('path');

const terminal = readline.createInterface(
  process.stdin,
  process.stdout
);

terminal.question('Which file you wanna copy?\n', (file) => {
  const copyFile = file;
  let copyFile2 = '';

  terminal.question('Copy file to?\n', (file2) => {
    copyFile2 = file2;

    terminal.close();

    copyFiles(copyFile, copyFile2);
  });
});

function copyFiles(copyFile, copyFileTo) {
  const sourcePath = path.resolve(copyFile);
  const destinationPath = path.resolve(copyFileTo);

  const dirname1 = path.dirname(sourcePath);
  const dirname2 = path.dirname(destinationPath);

  if (dirname1 === dirname2) {
    console.log('You cannot copy to the same location! Try again!');

    return;
  }

  fs.readFile(copyFile, 'utf-8', (err, dataFromFile) => {
    if (err && err.code === 'ENOENT') {
      console.log('No such file in directory! Try again!');

      return;
    }

    if (err) {
      console.log(err);

      return;
    }

    fs.writeFile(copyFileTo, dataFromFile, (errOnCopy) => {
      if (errOnCopy) {
        console.log(errOnCopy);

        return;
      }

      console.log('\x1b[32mYour file was copied successfully!');
    });
  });
}
