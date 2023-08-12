/* eslint-disable no-console */
'use strict';

const { copyFile } = require('./copyFile.js');
const { terminalInterface } = require('./terminalInterface.js');

const COPY_COMMAND = 'cp';

const app = () => {
  terminalInterface.question(
    'Use the command cp and enter file name and new file name: ',
    (inputValue) => {
      const [command, source, destination] = inputValue.split(' ');

      if (command !== COPY_COMMAND) {
        console.log('Invalid command');

        return app();
      }

      if (source === destination) {
        console.log(
          'Source and destination paths are the same. Nothing to copy.'
        );

        return app();
      }

      copyFile(source, destination);

      terminalInterface.close();
    }
  );
};

app();
