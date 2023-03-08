'use strict';

const fs = require('fs');

const copyFiles = (command, fromFileDirectory, destinationFileDirectory) => {
  if (command === 'cp' && fromFileDirectory !== destinationFileDirectory) {
    try {
      const data = fs.readFileSync(fromFileDirectory, 'utf-8');

      fs.writeFileSync(destinationFileDirectory, data);
    } catch (error) {
      global.console.log(`Something went wrong! Error code - ${error.message}`);
    }
  } else {
    global.console.log('Wrong command - for copying use "cp"');
  }
};

module.exports = { copyFiles };
