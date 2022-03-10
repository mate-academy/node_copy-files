'use strict';

const fs = require('fs');

const copyFile = (name, newName) => {
  if (name === newName) {
    return;
  }

  fs.copyFile(name, newName, (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);

      return;
    }

    // eslint-disable-next-line no-console
    console.log('Succesfully copied!');
  });
};

module.exports = { copyFile };
