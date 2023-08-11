'use strict';

const terminal = require('./modules/terminal');
const fs = require('fs');

function copyFile() {
  terminal.question('Enter your command: ', (key) => {
    const [command, firstFile, secondFile] = key.trim().split(' ');

    if (command === 'cp'
      && fs.existsSync(firstFile)
      && !fs.existsSync(secondFile)
    ) {
      fs.copyFile(firstFile, secondFile, (err) => {
        if (err) {
          throw new Error(err);
        }

        // eslint-disable-next-line no-console
        console.log(`${firstFile} was copied as ${secondFile}`);
      });
    }
    terminal.close();
  });
};

copyFile();
