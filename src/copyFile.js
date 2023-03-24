/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const { terminal } = require('./terminal.js');

const copyFile = (fileFrom, fileTo) => {
  fs.copyFile(fileFrom, fileTo, (err) => {
    if (err) {
      console.log(err);

      terminal.close();
    } else {
      console.log(`Your file '${fileFrom}' copied to '${fileTo}'.`);

      terminal.close();
    }
  });
};

module.exports = { copyFile };
