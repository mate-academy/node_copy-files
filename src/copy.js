/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const copy = (copiedFilePath, newPath) => {
  if (!copiedFilePath || !newPath) {
    console.log('One or both paths are not defined!');

    return;
  }

  if (copiedFilePath === newPath) {
    console.error('You try to copy in the same directory, use another one!');

    return;
  }

  if (!fs.existsSync(copiedFilePath)) {
    console.log('Copied file path does not exist!');

    return;
  }

  try {
    fs.copyFileSync(copiedFilePath, newPath);
    console.log('Your file copied successfully');
  } catch (error) {
    console.error(
      'Error occured when trying to copy file from'
      + ' '
      + `${copiedFilePath} to ${newPath}`
    );
  }
};

exports.copy = copy;
