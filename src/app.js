/* eslint-disable no-console */
'use strict';

const { copyFile } = require('./copyFile.js');
const { terminalInterface } = require('./terminalInterface.js');

const app = () => {
  terminalInterface.question(
    'Use the command cp and enter file name and new file name: ',
    (inputValue) => {
      const [command, source, destination] = inputValue.split(' ');

      if (command !== 'cp') {
        console.log('Invalid command');

        return app();
      }

      if (source === destination) {
        throw Error(
          'Source and destination paths are the same. Nothing to copy.'
        );
      }

      copyFile(source, destination);

      terminalInterface.close();
    }
  );
};

app();
