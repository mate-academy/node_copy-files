'use strict';
/* eslint-disable no-console */

const fs = require('fs');
const { terminal } = require('./terminal');

const copy = (answer) => {
  const [ command, fileToCopy, location ] = answer.split(' ');

  if (command !== 'copy') {
    console.log('Wrong command option');
    begin();

    return;
  }

  if (fileToCopy === location) {
    console.log('You can not copy to the same directory');
    begin();

    return;
  }

  const fileContent = fs.readFileSync(fileToCopy, 'utf8');

  fs.writeFile(location, fileContent, (err) => {
    if (err) {
      console.log(err);

      return;
    }

    console.log('The file was copied.');
    terminal.close();
  });
};

const begin = () => {
  terminal.question(
    'If you want to copy a file write: "copy /file-to-copy/ /new-file/" - ',
    copy
  );
};

begin();
