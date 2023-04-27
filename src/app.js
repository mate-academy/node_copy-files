'use strict';

const fs = require('fs');
const path = require('path');

function copyFile() {
  const terminalParameters = process.argv.slice(2);
  const copyFromFile = terminalParameters[0];
  const copyToFile = terminalParameters[1];

  if (!copyFromFile || !copyToFile) {
    global.console.log(
      'You need to indicate which file you want to make a copy from',
      'For example: file.txt file-copy.txt'
    );
  }

  const pathToCopyFromFile = path.join(__dirname, copyFromFile);
  const pathToCopyToFile = path.join(__dirname, copyToFile);

  if (pathToCopyFromFile === pathToCopyToFile) {
    global.console.log('You are trying to copy file to itself');

    return;
  }

  try {
    fs.copyFileSync(pathToCopyFromFile, pathToCopyToFile);

    global.console.log(
      `Success: you copied file from ${copyFromFile} to ${copyToFile}`
    );
  } catch (err) {
    global.console.log('Wrong way or file does not exist');
  }
}

copyFile();
