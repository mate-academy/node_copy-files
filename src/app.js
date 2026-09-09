/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copy(filePath, fileDestination) {
  if (filePath === fileDestination) {
    return;
  }

  fs.stat(filePath, (err, data) => {
    if (err) {
      console.error('');

      return;
    }

    if (!data.isFile()) {
      console.error('Data is not a file');

      return;
    }

    fs.copyFile(filePath, fileDestination, (error) => {
      if (error) {
        console.error('');

        return;
      }

      console.log(`File copied from ${filePath} to ${fileDestination}`);
    });
  });
}

if (process.argv.length !== 4) {
  console.error('Must be provide filePath and fileDestination');
} else {
  copy(process.argv[2], process.argv[3]);
}
