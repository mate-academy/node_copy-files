/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function copy(currentPath, newPath) {
  const fromPath = path.join(__dirname, currentPath);
  const toPath = path.join(__dirname, newPath);

  fs.copyFileSync(fromPath, toPath);
}

function copyData() {
  terminal.question(
    'to copy the file please use the command: cp <filePath> <newFilePath> \n'
    , (answer) => {
      const [cp, filePath, newFilePath] = answer.split(' ');

      if (cp !== 'cp') {
        console.log('\n you should use the <cp> command to copy the file');
        copyData();

        return;
      }

      if (!filePath || !newFilePath) {
        console.log('\n you should enter the current <filePath> and the <newFilePath> for copy');
        copyData();

        return;
      }

      if (filePath === newFilePath) {
        console.log('\n use different paths');
        copyData();

        return;
      }

      if (!fs.existsSync(filePath)) {
        console.log(`Input file '${filePath}' does not exist.`);
        copyData();

        return;
      }

      copy(filePath, newFilePath);
      console.log(`\n The file ${filePath} was copied to ${newFilePath}`);
      terminal.close();
    });
}

copyData();
