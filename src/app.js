/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [copyFrom, copyTo] = process.argv.slice(2);

if (copyFrom === copyTo) {
  console.log('The same destination');

  return;
}

fs.readFile(`src/${copyFrom}`, 'utf8', (err, data) => {
  if (err) {
    console.error(err);

    return;
  }

  fs.writeFile(`src/${copyTo}`, data, 'utf8', error => {
    if (error) {
      console.error(error);
    }
  });
});
