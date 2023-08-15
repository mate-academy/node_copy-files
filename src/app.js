'use strict';

const terminal = require('./modules/terminal');
const fs = require('fs');
const path = require('path');

function copyFile() {
  terminal.question('Enter your command: ', (key) => {
    const [command, firstFile, secondFile] = key.trim().split(' ');
    const firstFilePath = path.join(__dirname, firstFile);
    const secondFilePath = path.join(__dirname, secondFile);

    if (command === 'cp'
      && fs.existsSync(firstFilePath)
      && !fs.existsSync(secondFilePath)
    ) {
      const content = fs.readFileSync(
        firstFilePath,
        'utf8',
        (err, data) => {
          if (err) {
            throw new Error(err);
          }

          return data;
        },
      );

      fs.writeFileSync(secondFilePath, content, 'utf8', (err) => {
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
