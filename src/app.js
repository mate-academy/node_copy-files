/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const fs = require('fs');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function copyFile(message) {
  terminal.question(message, (command) => {
    const [nameOfCommand, pathCopyFrom, pathCopyTo] = command.split(' ');

    if (nameOfCommand !== 'cp') {
      console.log('Invalid command to copy file');
      copyFile('');

      return;
    }

    if (pathCopyFrom === pathCopyTo) {
      terminal.close();

      return;
    }

    let contentOfFile = '';

    try {
      const data = fs.readFileSync(pathCopyFrom, 'utf8');

      contentOfFile = data;
    } catch (err) {
      console.log('Error occur while reading file. Try again...');
      copyFile('');

      return;
    }

    fs.writeFileSync(pathCopyTo, contentOfFile);

    console.log('File was coppied');
    terminal.close();
  });
};

copyFile('Please enter command to copy file... \n');

module.exports.copyFile = copyFile;
