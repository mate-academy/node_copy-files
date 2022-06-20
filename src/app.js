'use strict';

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Where to copy the file?', (userInput) => {
  fs.copyFile('src/copy.js', `src/${userInput}/copy.js`,
    fs.constants.COPYFILE_EXCL, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
      // eslint-disable-next-line no-console
      console.log('Success');
    });

  rl.close();
});
