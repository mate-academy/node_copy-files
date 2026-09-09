/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const [command, source, destination] = process.argv.slice(2);

if (!command || !source || !destination.trim()) {
  throw Error('Syntax is cp file1.txt file2.txt');
}

function copyFile(operation, fromDir, toDir) {
  const valid = checkIfValid(operation, fromDir, toDir);

  if (valid) {
    try {
      fs.copyFileSync(fromDir, toDir);

      console.log(`${toDir}' succesfully copied!`);
    } catch (err) {
      console.log(err);
    }
  }
}

function checkIfValid(operation, fromDir, toDir) {
  switch (true) {
    case (operation !== 'cp'):
      console.log(`\nAny operation here is COPY!\n`);

      return true;

    case (!fs.existsSync(fromDir)):
      console.log(`\nFile or folder ${fromDir} does not exist\n`);

      return false;

    case (fs.existsSync(toDir)):
      console.log(`\nFile ${toDir} has already exist\n`);

      return false;

    default:
      return true;
  }
}

copyFile(command, source, destination);
console.log('Done');
