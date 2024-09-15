/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const { terminal } = require('./modules/terminal');

const copyCommand = 'cp';

const app = () => {
  terminal.question('Input command in format: cp _pathToFile _copyFilePath\n',
    (answer) => {
      const [command, filePath, copyPath] = answer.split(' ');

      if (command !== copyCommand) {
        console.log('Wrong command name\n');
        app();

        return;
      }

      if (filePath === copyPath) {
        console.log('Copying failed, paths are the same\n');

        terminal.close();

        return;
      }

      if (!fs.existsSync(filePath)) {
        console.log('File does not exist\n');
        app();

        return;
      }

      fs.copyFileSync(filePath, copyPath);
    });
};

module.exports = { app };
