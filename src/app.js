/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { copy } = require('./copy');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function copyData() {
  terminal.question(
    'to copy the file please use the command: cp <filePath> <newFilePath> \n',
    (answer) => {
      const [cp, filePath, newFilePath] = answer.split(' ');

      if (cp !== 'cp') {
        copyData();
        console.log('\n you should use the <cp> command to copy the file');

        return;
      }

      if (!filePath || !newFilePath) {
        copyData();
        console.log('\n you should enter the current <filePath> and the <newFilePath> for copy');

        return;
      }

      if (filePath === newFilePath) {
        copyData();
        console.log('\n the paths cannot be the same');

        return;
      }

      copy(filePath, newFilePath);
      console.log(`\n The file ${filePath} was copied to ${newFilePath}`);
      terminal.close();
    });
}

copyData();
