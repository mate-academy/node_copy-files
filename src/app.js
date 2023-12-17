'use strict';

const fs = require('fs');

const copy = () => {
  const source = process.argv[2];
  const destination = process.argv[3];

  if (source === destination) {
    return;
  }

  fs.copyFile(source, destination, (error) => {
    if (error) {
      throw new Error(error);
    }
  });
};

module.exports = {
  copy,
};
