/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const writeFile = (source, destination, data) => {
  fs.writeFile(destination, data, (writeErr) => {
    if (writeErr) {
      throw Error('Error writing to the destination file:', writeErr);
    }

    console.log(`File "${source}" copied to "${destination}" successfully.`);
  });
};

const readAndWriteFile = (source, destination) => {
  fs.readFile(source, (readErr, data) => {
    if (readErr) {
      throw Error('Error reading the source file:', readErr);
    }

    writeFile(source, destination, data);
  });
};

module.exports = { readAndWriteFile };
