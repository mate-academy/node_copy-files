'use strict';

const fs = require('fs');

const copyFiles = (command, fromFileDirectory, destinationFileDirectory) => {
  if (command === 'cp' && fromFileDirectory !== destinationFileDirectory) {
    let data = '';

    try {
      data = fs.readFileSync(fromFileDirectory, 'utf-8');
    } catch (error) {
      global.console.log('Unable to read file, no such file of directory');
    }

    try {
      fs.writeFileSync(destinationFileDirectory, data);
      global.console.log('File successfully copied');
    } catch (error) {
      global.console.log('Unable to write file');
    }
  } else {
    global.console.log('Wrong command - for copying use "cp"');
  }
};

module.exports = { copyFiles };
