'use strict';

const fs = require('fs');
const path = require('path');

const terminal = require('./terminal').terminal;
const { messages } = require('./messages');

const copyFile = (message) => {
  terminal.question(message, (recievedCommand) => {
    const [command, fileToCopy, locationToCopy] = recievedCommand.split(' ');

    const currentLocation = path.join(__dirname, `\\${fileToCopy}`);
    const destinationLocation = path.join(__dirname, `\\${locationToCopy}`);

    const isSourceExists = fs.existsSync(currentLocation);

    if (command !== 'cd') {
      copyFile(messages.wrongCommand);

      return;
    }

    if (!isSourceExists) {
      copyFile(messages.wrongSource);

      return;
    }

    if (currentLocation === destinationLocation) {
      copyFile(messages.wrongLocation);

      return;
    }

    fs.copyFileSync(currentLocation, destinationLocation);

    /* eslint-disable no-console */
    console.log('File copied successfully!');
    terminal.close();
  });
};

exports.copyFile = copyFile;
