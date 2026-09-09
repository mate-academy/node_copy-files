'use strict';

const fs = require('fs');
const myConsole = require('console');

const copy = (sourcePath, newPath) => {
  if (!sourcePath || !newPath) {
    myConsole.error('One or both paths are not defined!');

    return;
  }

  if (sourcePath === newPath) {
    myConsole.error('You try to copy in the same directory, use another one!');

    return;
  }

  if (!fs.existsSync(sourcePath)) {
    myConsole.error('Copied file path does not exist!');

    return;
  }

  try {
    fs.copyFileSync(sourcePath, newPath);
    myConsole.log('Your file copied successfully');
  } catch (error) {
    myConsole.error(
      'Error occured when trying to copy file from'
      + ' '
      + `${sourcePath} to ${newPath}`
    );
  }
};

exports.copy = copy;
