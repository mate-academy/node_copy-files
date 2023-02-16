/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function app() {
  const args = process.argv.slice(2);
  const [command, pathForCopy, pathForPaste] = args;

  if (command === 'cp' && pathForCopy !== pathForPaste) {
    const data = fs.readFileSync(pathForCopy, 'utf-8');

    fs.writeFileSync(pathForPaste, data, 'utf-8');
    console.log('Success!');
  } else {
    console.log('plz enter correct command. Exp: cp file.txt file-copy.txt');
  }
}

app();
