'use strict';
/* eslint-disable no-console */

const fs = require('fs');
const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Write < cp file.txt file-copy.txt >: ', (answer) => {
  const answerArr = answer.split(' ');
  const cpOperator = answerArr[0] === 'cp';
  const file = answerArr[1];
  const fileCopy = answerArr[2];

  if (answerArr.length === 3 && cpOperator) {
    return fs.copyFile(`src/${file}`, `src/${fileCopy}`, (err) => {
      if (file === fileCopy) {
        terminal.close();

        return;
      }

      if (err) {
        console.log(`Error: ${err}`);
      }

      terminal.close();
    });
  }

  console.log('Error, check if you entered correctly');
  terminal.close();
});
