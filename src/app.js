/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

(function app() {
  terminal.question('From where you want to copy the file?', (from) => {
    terminal.question('Where you want to copy the file?', (to) => {
      if (from === to) {
        console.log('Please enter different location!');
        app();
      }

      fs.copyFile(`src/${from}`, `src/${to}`, (err) => {
        if (err) {
          throw new Error('Something wrong...');
        }

        console.log('Succes, file copied!');
      }
      );

      terminal.close();
    });
  });
})();
