/* eslint-disable no-console */
'use strict';

const { terminal } = require('./terminal');
const fs = require('fs');

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

      fs.copyFile(source, dest, (err) => {
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
