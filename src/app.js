/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [prev, next] = process.argv.slice(2);

if (prev === next) {
  console.log('Error: can`t copy to the exact location');

  return;
}

fs.readFile(prev, 'utf-8', (readError, data) => {
  if (readError) {
    console.log(readError);

    return;
  }

  fs.writeFile(next, data, 'utf-8', writeError => {
    if (writeError) {
      console.log(writeError);

      return;
    }

    console.log('Successfully copied files');
  });
});
