'use strict';

const terminal = require('./modules/terminal');
const fs = require('fs');

function copyFile() {
  terminal.question('Enter your command: ', (key) => {
    const [command, firstFile, secondFile] = key.split(' ');

    if (command === 'cp' && !fs.existsSync(secondFile)) {
      fs.copyFile(firstFile, secondFile, (err) => {
        if (err) {
          throw new Error('Error!');
        }

        // eslint-disable-next-line no-console
        console.log(`${firstFile} was copied as ${secondFile}`);
      });
    }
    terminal.close();
  });
};

copyFile();
