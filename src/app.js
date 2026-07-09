/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFileTo() {
  const [originPath, destinationPath] = process.argv.slice(2);

  if (!originPath || !destinationPath) {
    console.error('Only one argument is provided');

    return;
  }

  if (originPath === destinationPath) {
    return;
  }

  if (!fs.existsSync(originPath)) {
    console.error('Non-existent source file');

    return;
  }

  fs.stat(originPath, (origError, originStats) => {
    if (origError) {
      console.error('Error');
    }

    if (originStats.isDirectory()) {
      console.error('Source is a directory');
    }

    fs.stat(destinationPath, (destError, destStats) => {
      if (destStats && destStats.isDirectory()) {
        console.error('Destination is a directory');
      }

      fs.cp(originPath, destinationPath, (copyError) => {
        if (copyError) {
          console.error('Copy Error');
        }
      });
    });
  });
}

copyFileTo();
