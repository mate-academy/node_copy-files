'use strict';
/* eslint-disable no-console */

const { terminal } = require('./terminal');
const fs = require('fs');
const { isEqual } = require('lodash');

function copyFile(from, to) {
  if (isEqual(from, to)) {
    console.warn('You can\'t copy a file in the same path');
  } else {
    fs.copyFile(from, to, err => {
      if (err) {
        return console.error(err);
      }

      console.log('Your file has been copied');
    });
  }

  terminal.close();
}

terminal.question('Copy file from: ', from => {
  terminal.question('Copy file to: ', to => {
    copyFile(from, to);
  });
});
