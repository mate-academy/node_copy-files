'use strict';

const fs = require('fs');

const copy = (fileName, fileToCopy) => {
  if (fileName === fileToCopy) {
    throw new Error('Files have the same names');
  }

  fs.readFile(fileName, (error, data) => {
    if (error) {
      throw new Error(error);
    }

    fs.writeFile(fileToCopy, data, (err) => {
      if (err) {
        throw new Error(err);
      }
    });
  });
};

module.exports = { copy };
