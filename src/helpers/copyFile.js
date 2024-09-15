/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const { terminal } = require('./terminal');
const path = require('path');

function copyFiles(message) {
  terminal.question(message, (command) => {
    const [ commandName, fileToCopy, newFileOrPath ] = command.split(' ');
    const formatOfNewFile = newFileOrPath.split('.')[1];

    const pathToSourceFile = path.join(__dirname, fileToCopy);
    const pathToNewFile = formatOfNewFile !== undefined
      ? path.join(__dirname, newFileOrPath)
      : path.join(__dirname, fileToCopy);

    console.log(pathToNewFile);

    if (commandName !== 'cp') {
      copyFiles('Wrong command!\n');

      return;
    }

    if (!fs.existsSync(pathToSourceFile)) {
      copyFiles('There is no such file to copy\n');

      return;
    }

    if (pathToSourceFile === pathToNewFile) {
      terminal.close();

      return;
    }

    fs.copyFileSync(pathToSourceFile, pathToNewFile);
    console.log('Copied successfully');

    terminal.close();
  });
}

module.exports = {
  copyFiles,
};
