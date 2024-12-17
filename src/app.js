/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFiles() {
  const [fileSource, fileDestination] = process.argv.slice(2);

  if (!fileDestination) {
    console.error('Provide both file source path and file destination path');

    return;
  }

  if (fileSource === fileDestination) {
    return;
  }

  fs.cp(fileSource, fileDestination, (error) => {
    if (error) {
      console.error(error);
    }
  });
}

copyFiles();
