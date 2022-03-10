'use strict';
/* eslint-disable no-console */

const fs = require('fs');
const [command, source, destination] = process.argv.slice(2);

if (!command || !source || !destination.trim()) {
  throw Error('Params is not correct');
}

function copyFile(operation, fromDir, toDir) {
  const valid = checkIfValid(operation, fromDir, toDir);

  if (valid) {
    try {
      fs.copyFileSync(`public/${fromDir}`, `public/${toDir}`);

      console.log(`=== File: '${toDir}' copied! ===`);
    } catch (err) {
      console.log(err);
    }
  }
}

function checkIfValid(operation, fromDir, toDir) {
  switch (true) {
    case (operation !== 'cp'):
      console.log(`\n${operation}: not copy command, use: 'cp'\n`);

      return false;

    case (!fs.existsSync(`public/${fromDir}`)):
      console.log(`\nFile or folder ${fromDir} does not exist\n`);

      return false;

    case (fs.existsSync(`public/${toDir}`)):
      console.log(`\nFile ${toDir} has already been copied or exist\n`);

      return false;

    case (fromDir.includes('../')):
      console.log('Don\'t cheat');

      return false;

    default:
      return true;
  }
}

copyFile(command, source, destination);
console.log('Done');
