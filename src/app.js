/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFileTo() {
  const [originPath, destinationPath] = process.argv.slice(2);

  if (!originPath || !destinationPath) {
    console.error('Two file paths are required');

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

      return;
    }

    if (originStats.isDirectory()) {
      console.error('Source is a directory');

      return;
    }

    fs.stat(destinationPath, (destError, destStats) => {
      if (destStats && destStats.isDirectory()) {
        console.error('Destination is a directory');

        return;
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
