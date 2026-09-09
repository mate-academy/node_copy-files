/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [prevPath, newPath] = process.argv.slice(2);

if (prevPath === newPath) {
  console.log('You trying to copy to the same location.');

  return;
}

fs.readFile(prevPath, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);

    return;
  }

  fs.writeFile(newPath, data, 'utf-8', (err2) => {
    if (err2) {
      console.log(err2);

      return;
    }

    console.log('File copied successfully.');
  });
});
