'use strict';

const readline = require('readline');
const { userCopy } = require('./userCopy');

const inteface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const copyUserFile = (message) => {
  inteface.question(message, (userCommandLine) => {
    const [
      command,
      pathToFile,
      copyFromFile,
    ] = userCommandLine.split(' ');

    if (pathToFile === copyFromFile) {
      copyUserFile('Enter different path');
    } else
    if (command !== 'cp' && command !== 'copy') {
      copyUserFile('Enter right command, and try again ');
    } else {
      userCopy(pathToFile, copyFromFile);
      inteface.close();
    }
  });
};

// eslint-disable-next-line max-len
copyUserFile('Enter command, path to file, and copy file in format: \ncopy/cp test1.txt test2.txt ');
