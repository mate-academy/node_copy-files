'use strict';

const fs = require('fs');

function app() {
  const args = process.argv.slice(2);
  const command = args[0];
  const pathForCopy = args[1];
  const pathForPaste = args[2];

  if (command === 'cp' && pathForCopy !== pathForPaste) {
    const data = fs.readFileSync(pathForCopy, 'utf-8');

    fs.writeFileSync(pathForPaste, data, 'utf-8');

    // eslint-disable-next-line no-console
    console.log('Success!');
  } else {
    // eslint-disable-next-line no-console
    console.log('plz enter correct command. Exp: cp file.txt file-copy.txt');
  }
}

app();
