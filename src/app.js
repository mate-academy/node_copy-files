/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFile() {
  const [from, to] = process.argv.slice(2);

  if (from === to) {
    console.error('error');

    return;
  }

  if (!from || !to) {
    return console.error('error');
  }

  fs.copyFile(from, to, (error) => {
    if (error) {
      console.error('Error copying file:', error);
    } else {
      console.log('File copied successfully!');
    }
  });
}

copyFile();
