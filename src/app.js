'use strict';

const fs = require('fs');

const [command, src, dest] = process.argv.slice(2);

if (!command || !src || !dest.trim()) {
  throw new Error('The syntax should be: cp file.txt file-copy.txt');
}

function copyFile(operation, fromDir, toDir) {
  const isValid = checkIfValidity(operation, fromDir, toDir);

  if (isValid) {
    try {
      fs.copyFileSync(fromDir, toDir);
    } catch (err) {
      throw Error(err);
    }
  }
}

function checkIfValidity(operation, fromDir, toDir) {
  switch (true) {
    case (operation !== 'cp'):
      console.log(`\nAny operation here is COPY!\n`);

      return true;
    case (!fs.existsSync(fromDir)):
      console.log(`\nFile or folder ${fromDir} does not exist\n`);

      return false;
    case (fs.existsSync(toDir)):
      console.log(`\nFile ${toDir} already exists\n`);

      return false;
    default:
      return true;
  }
}

copyFile(command, src, dest);
