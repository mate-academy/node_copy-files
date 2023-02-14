'use strict';

/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fileCopy = (message) => {
  terminal.question(message, (command) => {
    const [commandName, fileToCopy, newFileName] = command.split(' ');

    const pathToSourceFile = path.join(__dirname, `\\${fileToCopy}`);
    const pathToDestFile = path.join(__dirname, `\\${newFileName}`);

    if (commandName !== 'cp') {
      fileCopy('Wrong command!\n');

      return;
    }

    if (!fs.existsSync(pathToSourceFile)) {
      fileCopy('There is no such file to copy\n');

      return;
    }

    if (pathToSourceFile === pathToDestFile) {
      terminal.close();

      return;
    }

    fs.copyFileSync(pathToSourceFile, pathToDestFile);
    console.log('File copied!');

    terminal.close();
  });
};

module.exports = { fileCopy };
