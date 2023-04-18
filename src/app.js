/* eslint-disable no-console */
'use strict';

const { terminal } = require('./terminal');
const fs = require('fs');
const path = require('path');

const promptCopyFile = () => {
  terminal.question(
    'What must be copied? (Example: "cp file.txt file-copy.txt"): ',
    (input) => {
      const [ command, source, dest ] = input.split(' ');

      if (command !== 'cp' || !source || !dest) {
        console.log('Wrong command. Try again');
        promptCopyFile();

        return;
      }

      if (source === dest) {
        console.log('You are trying to copy to the same location');
        promptCopyFile();

        return;
      }

      const pathFrom = path.join(__dirname, source);
      const pathTo = path.join(__dirname, dest);

      fs.copyFile(pathFrom, pathTo, (err) => {
        if (err) {
          console.error(err);
          terminal.close();

          return;
        }

        console.log('Successfully copied!');
        terminal.close();
      });
    });
};

promptCopyFile();

module.exports = { promptCopyFile };
