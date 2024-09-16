'use strict';

const readline = require('readline');
const fs = require('fs');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question(
  `Please enter data to copy a file from one specified location to another\n`,
  (fullCommand) => {
    const [command, source, dest] = fullCommand.split(' ');
    const isSourceExist = fs.existsSync(source);

    if (command !== 'cp') {
      throw new Error('Invalid command (it should be \'cp\'');
    }

    if (!isSourceExist) {
      throw new Error(`File is not exist at ${source}`);
    }

    if (source === dest) {
      throw new Error('You are trying to copy a file to the same location');
    }

    fs.copyFileSync(source, dest);
    // eslint-disable-next-line no-console
    console.log('File copied successfully!');
    terminal.close();
  }
);
