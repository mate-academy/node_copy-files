/* eslint-disable no-console */

'use strict';

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const copyFile = (src, dest) => {
  const srcPath = path.resolve(src);
  const destPath = path.resolve(dest);

  if (srcPath === destPath) {
    console.error('Source and destination are the same.');

    return;
  }

  if (!fs.existsSync(srcPath)) {
    console.error(`Source file ${srcPath} does not exist`);

    return;
  }

  if (!fs.statSync(srcPath).isFile()) {
    console.error('Only file copying is supported');

    return;
  }

  try {
    fs.copyFileSync(srcPath, destPath);

    console.log('File copied successfully');
  } catch (error) {
    console.error(`Error during file copy: ${error.message}`);
  }
};

const handleUserInput = (userInput) => {
  const [command, src, dest] = userInput.split(' ');

  if (command !== 'cp') {
    console.error('Invalid command');
    rl.close();

    return;
  }

  if (!src || !dest) {
    console.error('Error: Please provide both source and destination files.');
    rl.close();

    return;
  }

  copyFile(src, dest);

  rl.close();
};

rl.question('Enter command:', handleUserInput);
