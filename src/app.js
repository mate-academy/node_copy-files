'use strict';
/* eslint-disable no-console */

const readline = require('readline');
const path = require('path');
const { copyFile } = require('./copyFile');

const terminalInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const makeCopyFile = () => {
  terminalInterface.question(
    'Use the command cp and enter file name and new file name: ',
    (inputValue) => {
      const [command, sourceFile, targetFile] = inputValue.split(' ');

      const pathToSourceFile = path.join(__dirname, sourceFile);
      const pathToCopyFile = path.join(__dirname, targetFile);

      if (command !== 'cp') {
        console.log('Invalid command');

        return makeCopyFile();
      }

      if (pathToSourceFile === pathToCopyFile) {
        console.log('You try to copy to the same location');

        return makeCopyFile();
      }

      copyFile(pathToSourceFile, pathToCopyFile);
      terminalInterface.close();
    }
  );
};

makeCopyFile();

module.exports = {
  makeCopyFile,
};
