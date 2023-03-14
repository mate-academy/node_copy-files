/* eslint-disable no-console */
'use strict';

const { terminal } = require('./terminal');
const { showError } = require('./showError');
const fs = require('fs');

const copyFile = (userInput) => {
  const [
    command,
    source,
    destination,
  ] = userInput.split(' ');

  if (command !== 'cp') {
    showError('You entered the wrong command.', copyFile);

    return;
  }

  if (!source) {
    showError('You didn\'t specify the source file.', copyFile);

    return;
  }

  if (!destination) {
    showError('You didn\'t specify the destination file.', copyFile);

    return;
  }

  if (source === destination) {
    showError('You try to copy the same file.', copyFile);

    return;
  }

  const fileData = fs.readFileSync(source, 'utf8');

  fs.writeFile(destination, fileData, (err) => {
    if (err) {
      console.log(err);

      return;
    }

    console.log('The file was successfully copied.');
    terminal.close();
  });
};

module.exports = { copyFile };
