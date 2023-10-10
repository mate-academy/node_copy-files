'use strict';
/* eslint-disable no-console */

const fs = require('fs');

function copyFile() {
  const [fileToCopy, fileToCreate] = process.argv.slice(2);

  if (fileToCopy === fileToCreate) {
    return;
  }

  try {
    const fileContent = fs.readFileSync(fileToCopy, 'utf8');

    fs.writeFileSync(fileToCreate, fileContent);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('There is no such file or directory');
    }

    if (error.code === 'EISDIR') {
      console.log('Cannot read a directory');
    }
  }
}

copyFile();
