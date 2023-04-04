/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const { terminal } = require('./terminal');

const copyFile = (source, dest) => {
  if (source === dest) {
    console.log(
      '\x1b[43m\x1b[36m Please check the routing!!!\n'
      + ' You are trying to copy a file to the same folder... \x1b[0m',
    );

    terminal.close();
  }

  if (source !== dest) {
    fs.copyFile(source, dest, error => {
      if (error) {
        console.log(error);
      }

      console.log(
        '\x1b[42m\x1b[36m Congratulations! The file has been copied... \x1b[0m',
      );
    });

    terminal.close();
  }
};

const copyFileToFolder = () => {
  console.log(
    '\x1b[36m\x1b[47m To copy a file, '
    + 'please provide the details of the directories \x1b[0m',
  );

  terminal.question('FROM: ', (from) => {
    terminal.question('TO: ', (to) => {
      copyFile(from, to);
    });
  });
};

module.exports = {
  copyFileToFolder,
};
